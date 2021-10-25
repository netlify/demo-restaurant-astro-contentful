# demo-restaurant-astro-contentful

 An example which uses content managed in Contentful to generate an archetypal restaurant site using [Astro](https://astro.build).

 👉 https://demo-restaurant-astro-contentful.netlify.app/
 

## Usage for Development and Deployment


### add the Contentful creds to your project as environment variable

You can use the Netlify CLI for this

```

# Create or link your project with Netlify
netlify create
# or
netlify link

# Add the Contentful Space ID
netlify env:set CONTENTFUL_SPACE_ID XXX

# Add the Contentful Content Delivery API access token
netlify env:set CONTENTFUL_CONTENT_API_TOKEN XXX

# Run Netlify Build to prime your build with the data 
# This will use your centrally managed env vars
netlify build

# You now have data to build against
netlify dev
```



## Speedy start

This example requires authenticated access to the Contentful API in order to build. But you can also explore a version where the content has been saved as part of the repo as JSON. That version will deploy in a couple of clicks and is a useful place to explore Astro.

Explore that repo 👉 https://github.com/philhawksworth/demo-restaurant-astro-json



Or, to jump right in and clone that repo and instantly generate and deploy it for free on Netlify, click the Deploy To Netlify button below.(But it's always smart to [look at the repo first](https://github.com/philhawksworth/demo-restaurant-astro-json))


[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/philhawksworth/demo-restaurant-astro-json&campaign=devex-ph")


