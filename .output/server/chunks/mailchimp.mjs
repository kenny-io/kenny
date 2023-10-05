import { a as defineEventHandler, u as useRuntimeConfig, r as readBody, c as createError } from './nitro/node-server.mjs';
import 'node:http';
import 'node:https';
import 'node:zlib';
import 'node:stream';
import 'node:buffer';
import 'node:util';
import 'node:url';
import 'node:net';
import 'node:fs';
import 'node:path';
import 'fs';
import 'path';
import 'unified';
import 'mdast-util-to-string';
import 'micromark';
import 'unist-util-stringify-position';
import 'micromark-util-character';
import 'micromark-util-chunked';
import 'micromark-util-resolve-all';
import 'micromark-util-sanitize-uri';
import 'slugify';
import 'remark-parse';
import 'remark-rehype';
import 'remark-mdc';
import 'hast-util-to-string';
import 'github-slugger';
import 'detab';
import 'remark-emoji';
import 'remark-gfm';
import 'rehype-external-links';
import 'rehype-sort-attribute-values';
import 'rehype-sort-attributes';
import 'rehype-raw';
import 'unist-util-visit';

const mailchimp = defineEventHandler(async (event) => {
  const runtimeConfig = useRuntimeConfig();
  const { email, first_name } = await readBody(event);
  let result;
  if (!email) {
    console.error("Missing `email` in the subscribe body");
    return;
  }
  const mailchimp = await import('@mailchimp/mailchimp_marketing').then((r) => r.default || r);
  mailchimp.setConfig({
    apiKey: runtimeConfig.MAILCHIMP_API_KEY,
    server: runtimeConfig.MAILCHIMP_SERVER_PREFIX
  });
  try {
    const response = await mailchimp.lists.addListMember(runtimeConfig.MAILCHIMP_AUDIENCE_ID, {
      email_address: email,
      status: "subscribed",
      merge_fields: {
        FNAME: first_name
      }
    });
    result = { message: `Email ${response.email_address} subscribed to Mailchimp`, status: 200 };
  } catch (err) {
    result = { message: err.response.body.title, status: err.status };
  }
  if (result.status !== 200)
    throw createError({ statusCode: result.status, statusMessage: result.message });
  return result;
});

export { mailchimp as default };
//# sourceMappingURL=mailchimp.mjs.map
