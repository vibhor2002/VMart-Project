const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

export default async (req, res) => {
    const {items, email} = req.body;

    // Validate the items and price
   if (!Array.isArray(items) || items.length === 0) {
      return res.status(400).json({ error: "Invalid items or price" })
   }
   
   const lineItems = items.map((item) => ({
      quantity: 1,
      price_data: {
         currency: "usd",
         unit_amount: item.price * 100,
         product_data: {
            name: item.title,
            images: [item.image],
            description: item.description,
         },
      },
   }))

    const session = await stripe.checkout.sessions.create({
        payment_method_types: ["card"],
        shipping_options: [
            {
              shipping_rate_data: {
                type: 'fixed_amount',
                fixed_amount: {
                  amount: 499,
                  currency: 'usd',
                },
                display_name: 'Next-Day Shipping',
                delivery_estimate: {
                  minimum: {
                    unit: 'business_day',
                    value: 1,
                  },
                  maximum: {
                    unit: 'business_day',
                    value: 3,
                  },
                },
              },
            },
          ],
        shipping_address_collection: {
            allowed_countries: ['GB', 'US', 'CA', 'IN'],
        },
        line_items: lineItems,
        mode: 'payment',
        success_url: `${process.env.HOST}/success`,
        cancel_url: `${process.env.HOST}/checkout`,
        metadata: {
            email,
            images: JSON.stringify(items.map(item => item.image))
        }
    });

    res.status(200).json({id: session.id})
};