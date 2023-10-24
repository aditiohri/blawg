---
isDraft: false
title: Vite for the Win
date: 2023-10-22
author: Aditi Ohri
desc: Red Hat's Customer Portal SPAs are a fleet of nine Single Page Applications, which were once upon a time hosted as Drupal nodes. In 2022, they were modernized, thanks to the Customer Portal's Front End team's willingness to experiment with Vite.
tags: ["SPA", "vite", "redhat", "collaboration"]
---

The <a href="https://docs.engineering.redhat.com/pages/viewpage.action?pageId=271993968" >Customer Portal SPAs</a> are a fleet of nine Single Page Applications that offer Red Hat customers information on specific Red Hat Products and related topics to their Red Hat subscriptions. From <a href="https://access.redhat.com/start/" >onboarding new customers</a> to providing up-to-date details on <a href="https://access.redhat.com/security/cve/cve-2022-1278" >critical vulnerabilities</a>, these web properties are critical to the value found in a Red Hat software subscription.

From the Portal’s inception until Q4 2022, all these web properties were hosted on the Customer Portal domain as Drupal nodes.

![Drupal interface](/images/vite-drupal.png)<figcaption>We would zip our apps and drop them into this interface - no version control, no commit history, and a lot of room for human error.</figcaption>

Some of them were Vue apps written in a single page within Vanilla HTML/JavaScript/CSS tags and copy/pasted into Prima, a Drupal editor; while others were Polymer or Angular apps that would compile into zipped folders later uploaded to Drupal. They all employed wildly different setup, configuration, compilation and deployment strategies, which reflected the preferences of an individual developer who worked intermittently on the Portal application while juggling other workloads.

As the Customer Portal grew in size, scope and resources, requests from external stakeholders to make customer-facing improvements to these nine web properties increased in frequency. Yet the architecture of these applications could not sustain the pace of these requests. How could Portal developers accommodate stakeholders’ interests, improve the health of Portal applications and streamline the development experience?

In April 2022, the Customer Portal workstream brought a dedicated front end team together to streamline the architecture of these applications: Rebekah Cruz, Chase Gatyas, Daniel Faucette, and myself. Our goals were to increase the capacity for developers to fulfill stakeholder requests and provide customer-facing changes; improve the onboarding process for new developers; reduce the mental overhead for developers as they context switch from one app to another; and to optimize the build size, accessibility and load time of each page.

After much research and discussion, we chose to standardize our tooling across the SPAs, using <a href="https://vitejs.dev/guide/why.html" >Vite</a>. Vite allows us to use a standard list of commands to start, test, build and deploy our applications while also giving us the flexibility to choose from a variety of supported frontend frameworks like React, Vue, or Lit. We can also use custom web components or Vanilla JS/TS if we’re feeling brave. The Vite CLI is the official replacement for the Vue CLI and Create React App. There are Vite integrations that also support <a href="https://vite.nuxtjs.org/" >Nuxt</a>, <a href="https://docs.astro.build/en/recipes/add-yaml-support/" >Astro</a>, and more recently, <a href="https://bun.sh/guides/ecosystem/vite" >Bun</a>.

Before modernization, Chase could only launch 3 out of 9 applications without requiring support from other developers. I could only launch 2 of them independently! Now, post-modernization, anyone can easily launch, build and deploy any of our SPAs.

![Gitlab /security README](/images/vite-security.png)<figcaption>Now we’ve got version control, commit histories, and a detailed README!</figcaption>

After successfully modernizing the <a href="https://access.redhat.com/security" >Product Security landing page</a> and receiving positive feedback from the team on the effectiveness of the Vite server and ecosystem for both local development and production deployment, I created the SPA template repository. We currently have templates for Vite apps that use React, Vue and Vanilla JS. These templates allow our team to easily standardize processes, settings and dependencies across multiple applications. A developer can use a template as a starting point for a new application, or one that needs to be modernized. It also facilitates onboarding for new developers, who can experiment with the template before diving into one of our more established repositories to get a sense of the tooling and requirements that an application may have.

![SPA-template README](/images/vite-vuetemplate.png) <figcaption>The SPA template repository sets developers up for success. Rebekah was previously a React developer with no Vue experience. Using the template, she was easily able to seamlessly transition to using Vue because of our standardization efforts!</figcaption>

Using the SPA templates sped up our development. We were able to modernize all of our applications and eliminate our dependency on the D7 Drupal node within 8 months. Our bundled apps are now much smaller and efficient than their ancient counterparts, improving the user experience due to faster load times in the browser.

![size & load time of terms-based-registry post- modernization](/images/vite-terms.png)<figcaption>Terms Based Registry post-modernization weighs in at 9.9 KB and loads in a cool 197 ms. Before modernization, it was a clunky Angular application weighing in at almost 80 KB and a load time that I cannot tell you because I was unsuccessful in spinning up the ancient Angular version of the app!</figcaption>

Standardizing processes with Vite and hosting all of our source code on Gitlab, we were able to migrate all of our applications' Head, Header and Footer services from clunky cp-chrome to Primer; facilitate the migration of the Customer Portal Search application to use Primer; and provide redesigns for the Product Security Landing Page and the CVE Details application in collaboration with Nilam Goswami’s team. Those two redesigns were highlighted in the 2023 ASP awards, which the Customer Portal won for the 13th year in a row!

The Customer Portal has made huge strides in the last two years, and the front end team’s choice to standardize our application architecture using Vite has been instrumental to many of those improvements. It has been so much easier to collaborate with new developers and move from one application’s code base to another. While we still struggle with version drift and framework specific issues as we code, we are better able to support each other in our work because we are all working from the same baseline.
