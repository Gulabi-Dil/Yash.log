---
title: Instagram Posts Unsaving Script
date: 2026-03-11
slug: instagram-posts-unsaving-script
tags: [javascript,automation]
excerpt: A mini project I did to get started with backend
github: https://github.com/Gulabi-Dil/Instagram-Post-Unsaving-Script
---

Instagarm on IOS has an option to select all saved posts and unsave them all in one go not on Android. I didn't want to manually select the thousands of posts to unsave them so I searched for some tools online and found a browser extension but it was really slow and used to stop running midway or whenever I switched tabs. So I wanted to write my own script to automate the process.

## Initial Approach

  I wanted to implement a full fledged application to publish as a tool for other users as well. Another reason was I wwanted to practice and learn more about Node. I began by inspecting the requests especially when we like, dislike, save and unsave posts. The cookies, tokens, headers etc.

  I looked up about Instagram's API and landed at the Meta Developers site where I could create apps to use Instagram's public API. To use it, the insta account had to be a professional account. Searched about this and found out that Instagram had discontinued their public API (basic display API for 3rd party services with read only access) for normal accounts starting Dec 4, 2024. My dumb ass glanced over the docs, changed my account to professional and started trying out their API on Postman only to realise later that I skipped the most important thing:

`CANNOT USE THIS API TO DELETE POSTS/UNSAVE LIKE I WANTED TO. IT'S MOSTLY LIKE A MODERATION THING FOR PROFESSIONAL ACCOUNTS`

Sigh

Anyway I practiced some authentication and authorization because of this and learnt new stuff. I authenticated myself using Node and learnt a bit about how to handle the access tokens, authorization code, basic authorization.

### Some things that I learnt -
  1. [Private API](https://www.techtarget.com/whatis/definition/private-API)


  2. [Content Delivery Networks (CDNs)](https://www.cloudflare.com/en-gb/learning/cdn/what-is-a-cdn/):

      Instagram stores our media in Meta's own CDN. The content is stored on the CDN server nearest to the user. For example, I made a test post on instagram while in Karnataka. My media was stored in the Mumbai CDN server.
      ```
      https://scontent-bom2-1.cdninstagram.com/v/t51.82787-15/640847972_17851708164674529_2635760399345158486_n.jpg?stp=dst-jpg_e35_tt6&_nc_cat=107&ccb=7-5&_nc_sid=18de74&efg=eyJlZmdfdGFnIjoiRkVFRC5iZXN0X2ltYWdlX3VybGdlbi5DMyJ9&_nc_ohc=gVKmDNtebM8Q7kNvwGGNKRY&_nc_oc=Adm1UYDUKaP4xg6wvABg2sNdDoRcL2t82zBMa0r6farlVmix2l983w7zmQyR9UzoQxY&_nc_zt=23&_nc_ht=scontent-bom2-1.cdninstagram.com&edm=ANo9K5cEAAAA&_nc_gid=vQEKfoaeb3BN2osqoHb7lA&_nc_tpa=Q5bMBQEvLq6rv3HJ7macDCJL5AhBWFyXoDREYJAwqLqY0ppD4XBg0OWJ8HPHVzvv5ZJt8bI0Z_AejPgeNQ&oh=00_Afv_T59NZCYCtIwMudutmGTtFjkFvQ_dA8lIv4GyZVjAJQ&oe=699F35EE
      ```

  > **Breaking down the URL:**

   - `scontent-bom2-1.cdninstagram.com` — Meta's CDN server closest to you
   - `/v/t51.82787-15/` — internal Instagram media version/format path
   - `640847972_17851708164674529_...n.jpg` — the actual image filename
   - Everything after `?` are query parameters for security/caching:
      - `ccb=7-5` — cache control
      - `oh=...` — a hash that validates the URL is legitimate
      - `oe=699F35EE` — **expiry time** in hex (this is important!)
 
  **The important bit — `oe=699F35EE`:**
   - This URL is **temporary** and will expire
   - `oe` is the expiration timestamp
   - After it expires the URL will return a 403 error
   - So you can't store this URL long term — you'd need to re-fetch it via the API each time.



3. [OpenID Connect](https://openid.net/developers/how-connect-works/):

    Facebook has a limited login mode for IOS users which used OIDC token. [More details](https://developers.facebook.com/docs/facebook-login/limited-login/)


4. To learn how Instagram's private API actually works, I need to use the MITM proxy to intercept and inspect the requests and endpoints.


5. [How the MITM proxy works](https://vinodpattanshetti49.medium.com/how-the-mitm-proxy-works-8a329cc53fb):
    
    FOXY AF I LOVE THISS 

    MITM proxy smartly handles creation of dummy certificates. Some info about certificates:
   - [Public key certificate](https://en.wikipedia.org/wiki/Public_key_certificate)