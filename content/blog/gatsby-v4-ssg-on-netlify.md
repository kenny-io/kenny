---
title: Gatsby v4 SSG Rendering mode on Netlify
description: Amongst other features that came with Gatsby v4 is a Deferred Static Generation (DSG) rendering mode that offers you a new way to render pages on-demand. Let's see it at work on Netlify
authors:
  - Ekene Eze
date: 2021-10-18
lastmod: 2021-10-18
featured: true
image: "/content/blog/images/gatsby-v4-on-netlify.png"
topics:
  - tutorials
tags:
  - gatsby
  - ssg
  - netlify

category: "Gatsby"
format: blog
relatedposts:
seo:
  metatitle: "Learn How to set up a Gatsby 4 project on Netlify with SSG rendering mode"
  metadescription: "Check out this post to explore Gatsby v4 rendering mode on Netlify. Learn how to deploy Gatsby 4 projects on Netlify with SSG rendering mode"
  ogimage: /img/blog/vue-3-watch-api-deep-dive.png
---

So Gatsby v4 is out and it came in hot!.

Amongst other features that came with it is a Deferred Static Generation (DSG) rendering mode that offers you a new way to render pages on-demand.

Pages with DSG rendering mode will not be generated at build time, they will be generated at request time, cached and served to users. Subsequent requests for the already generated pages will then be served from the cache.

Does this sound familiar to you? it does to me seeing that this concept is in-line with the [DPR](https://github.com/jamstack/jamstack.org/discussions/549) approach that Netlify announced a couple of months ago.

### So how do I use this DSG thing on Netlify?

Thankfully the wonderful Netlify integrations team already did all the hard work for us so all we need to do is enable support for Gatsby v4 and just keep writing our Gatsby code like before.

Then if we need to specify a particular rendering mode for any of our pages, we just add a tiny line of config:

```js
defer: true;
```

And that page will be statically generated and rendered on-demand.

Also if you're trying to use DSG in your existing Gatsby sites, there's a [migration guide available](https://v4.gatsbyjs.com/docs/reference/release-notes/migrating-from-v3-to-v4/) for people using Gatsby v3. You can follow the process to update your existing Gatsby sites.

### Demo time

So I have a news site with 6 news items, all statically generated at build time. What I intend to do now is share the load, I'll generate the first 3 pages (breaking news) of my news items at build time with the SSG rendering mode.

Then I will generate the last 3 pages (archives) with DSG. My reasoning here is that people wants to read the breaking news items immediately so it makes sense to have to pre generate thos at build time. But the, archived new items? hmmm they may or not want to read that at all (so let's only generate it when they ask for it).

To do this, I'll first need to update Gatsby and all it's dependencies:

```bash
npm install gatsby@next

```

If you have other Gatsby dependencies and plugins, update all of those as well.

Enable it on Netlify

With all that done, you have Gatsby v4!. Now let's get it working on Netlify.

There are 3 steps to enable Gastby v4 sites on Netlify:

#### Install the Netlify Gatsby build plugin

From your project's base directory, install the plugin as a devDependency like this:

```bash
npm install -D @netlify/plugin-gatsby@^2.0.0-beta
```

Next, create a `netlify.toml` file in the root of your project and update it with the plugins section below:

```toml
[[plugins]]
package = "@netlify/plugin-gatsby"
```

#### Install Gatsby's Netlify plugin

To use the new features, you must install the beta vbersion of [the gatsby-plugin-netlify package](https://www.gatsbyjs.com/plugins/gatsby-plugin-netlify/) into your project like:

```bash
npm install -D gatsby-plugin-netlify@next
```

And then update your `gatsby-config.js` file with the plugin like so:

```js
module.exports = {
  plugins: ["gatsby-plugin-netlify"]
};
```

#### Build configuration

Gatsby requires Node 14 to build and SSR/DSG rendering modes to work correctly. During the beta period, you need to manually set the environment variable `AWS_LAMBDA_JS_RUNTIME` to `nodejs14.x` to ensure SSR and DSR use the correct versions.

> Note - This must be done in the Netlify UI, not in the netlify.toml. Need information on choosing a functions runtime? here's [the docs for it](https://docs.netlify.com/functions/build-with-javascript/#runtime-settings).
