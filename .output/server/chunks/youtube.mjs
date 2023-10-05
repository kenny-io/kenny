import { u as useRuntimeConfig } from './nitro/node-server.mjs';
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

async function youtube(req, res) {
  const runtimeConfig = useRuntimeConfig();
  let result;
  const API_KEY = runtimeConfig.YOUTUBE_API_KEY;
  const CHANNEL_ID = runtimeConfig.YOUTUBE_CHANNEL_ID;
  if (!API_KEY || !CHANNEL_ID) {
    return {
      statusCode: 500,
      body: JSON.stringify({
        error: "The YouTube API key or channel ID is missing."
      })
    };
  }
  try {
    const response = await fetch(
      `https://www.googleapis.com/youtube/v3/search?key=${API_KEY}&channelId=${CHANNEL_ID}&part=snippet,id&order=date&maxResults=20`
    );
    if (!response.ok) {
      throw new Error(`YouTube API responded with status: ${response.status}`);
    }
    const data = await response.json();
    result = data;
    return {
      statusCode: 200,
      data: result
    };
  } catch (error) {
    console.error("Error fetching videos:", error);
    return {
      statusCode: 500,
      body: JSON.stringify({
        error: error.message
      })
    };
  }
}

export { youtube as default };
//# sourceMappingURL=youtube.mjs.map
