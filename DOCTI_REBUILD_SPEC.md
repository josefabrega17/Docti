# Docti Rebuild Spec

Last updated: 2026-06-04

## 2026-06-04 Fidelity Rebuild Notes

The current implementation is based on the user-provided screenshots and demo recording. The rebuild should be judged against those references first, not against generic SaaS landing-page taste.

Implemented public routes:

- `/`: sparse audience-router landing page with centered Docti logo, Panama headline, doctor/patient cards, and demo link.
- `/pro/`: doctor-facing Docti Pro sales page with the screenshot section order: hero, familiar problems, absence impact, feature mocks, Panama clinic proof, demo choices, waitlist form, and footer.
- `/connect/`: patient-facing Docti Connect sales page with the screenshot section order: hero, problem cards, three-step booking flow, search preview, verified doctors, mobile experience, signup form, and footer.
- `/preview/`: dark app-style interactive Docti Pro demo based on the provided screen recording, including the 7-step sidebar, patient selection, protocol, note, expediente, calendar, and voice/recipe flow.

Implementation guardrail:

- Do not redesign the brand from scratch.
- Do not replace the minimal landing page with a long homepage.
- Do not make `/preview/` look like a marketing page; it should feel like the simulated product UI.
- Keep El Centro entirely separate from this repo.

## Goal

Rebuild the public Docti surfaces so they feel unmistakably like the current live product at `docti.app`, while improving execution quality, responsiveness, maintainability, and demo polish.

This is **not** a rebrand and **not** a loose reinterpretation.

The standard is:

- If someone knows `docti.app`, the rebuilt version should feel immediately recognizable.
- The rebuilt version should preserve the same market positioning, product split, and conversion logic.
- Improvements should sharpen the product, not replace its identity.

## Core Principle

Build in two passes:

### Pass 1: Faithful Replica

Reproduce:

- page structure
- section order
- copy hierarchy
- CTA hierarchy
- product framing
- visual tone
- product UI references
- demo flow structure

This pass is about accuracy.

### Pass 2: Controlled Improvements

After fidelity is correct, improve:

- spacing consistency
- typography consistency
- responsive behavior
- component reuse
- motion polish
- visual clarity
- code quality
- demo transitions

This pass is about refinement, not reinvention.

## Non-Negotiables

The rebuild must preserve:

- Panama-specific framing
- the split between doctor-facing `Docti Pro` and patient-facing `Docti Connect`
- the headline logic around reducing admin work and increasing clinical focus
- direct product language instead of generic healthtech abstraction
- the public-demo nature of `/preview`
- a clear distinction between the marketing site and a production healthcare platform

The rebuild must avoid:

- generic startup visual language
- editorial or lifestyle aesthetics that overpower product clarity
- speculative messaging not grounded in the live site
- over-simplifying dense product sections into generic landing-page blocks
- “improvements” that weaken recognizability

## Source of Truth

Primary source of truth for public rebuild:

- `https://www.docti.app/`
- `https://www.docti.app/pro/`
- `https://www.docti.app/connect/`
- `https://www.docti.app/preview/`

Previously gathered Docti project context remains relevant for:

- product interpretation
- scope boundaries
- demo-vs-production framing

## Visual Direction

### Overall look

The rebuilt site should feel:

- clean
- conversion-oriented
- product-led
- medically professional
- modern startup, not corporate hospital

It should look lighter, sharper, and more utilitarian than the current failed rebuild.

### Tone

The design should communicate:

- efficiency
- trust
- simplicity
- practical usefulness

Not:

- mood-board design
- abstract innovation branding
- overly soft editorial warmth

### UI style

Expected visual characteristics:

- clean light backgrounds
- restrained accent usage
- compact SaaS-like spacing where appropriate
- credible product panels
- UI sections that feel tied to actual product capability
- forms and CTAs that feel like working acquisition surfaces

## Sitewide Requirements

Apply across all pages:

- preserve recognizability of the live Docti brand
- responsive desktop and mobile layouts
- consistent header/nav/footer system
- consistent CTA styling and hierarchy
- consistent type scale
- consistent section spacing
- reusable component patterns where possible

Shared components should likely include:

- navbar
- footer
- CTA buttons
- metric blocks
- feature cards
- product UI mock blocks
- testimonial cards
- form sections

## Homepage Spec

Path:

- `/`

### Strategic role

The homepage should orient the user immediately and route them into the correct side of the product.

It is not supposed to do the full sales job for both sides in detail.

### Required feel

The page should feel very close to the current Docti landing page:

- fast to understand
- Panama-specific
- direct
- split by audience

### Required content structure

1. Hero

Must preserve the current logic:

- Docti as a platform in Panama
- “Menos administración. Más medicina.”
- a concise supporting line connecting doctors and patients through simple technology

2. Audience split

This is central.

The homepage should present:

- `Soy Médico`
- `Soy Paciente`

Each path should have:

- a short benefit summary
- a strong CTA

3. Demo access

The homepage should clearly expose:

- `Ver Demo Interactivo`

4. Minimal supporting context

The homepage should stay focused and not become overly long.

### Expected result

The final homepage should look like a sharper, better-built version of the current live landing page, not a different product site.

It should feel:

- simple
- product-confident
- recognizable

## Docti Pro Spec

Path:

- `/pro/`

### Strategic role

This is the primary doctor-facing sales page.

It should sell:

- workflow efficiency
- admin reduction
- stronger follow-up
- more organized patient operations

### Required feel

This page should feel:

- more operational
- denser
- more product-credible
- more ROI-driven

than the homepage.

### Required content structure

1. Hero

Preserve the current live-page logic:

- early access in Panama
- “Menos administración. Más medicina.”
- concise subhead about agenda, attention, documentation, and patient follow-up

2. Primary CTA pair

Keep a dual CTA structure similar to the live page:

- request access / early access
- interactive demo

3. Top metrics

The page should include compact product metrics near the top to establish operational credibility.

4. “Does this sound familiar?” problem section

Must preserve the pain framing:

- no-shows
- manual follow-up
- disorganized scheduling
- scattered records
- administrative overload

5. Economic impact section

Preserve the logic that absences equal lost money.

This should feel quantified, direct, and practical.

6. Feature sections

Must include productized sections for:

- voice-generated prescriptions / notes
- patient pipeline / CRM
- automated reminders and follow-up
- calendar / schedule coordination

Each feature section should include:

- what it does
- what action it replaces
- what result it creates
- a UI illustration or simulation

7. Social proof / testimonials

Preserve credibility signals from local clinic or doctor use cases.

8. Early access form

The page should end with a real-looking waitlist/access request structure.

### Expected result

The final `/pro/` page should look like a polished clinical-operations SaaS page built specifically for Panama.

It should feel:

- specific
- practical
- confident
- credible

## Docti Connect Spec

Path:

- `/connect/`

### Strategic role

This is the patient-facing discovery and booking page.

It should sell:

- ease of finding doctors
- transparent pricing
- lower booking friction
- trust in verified professionals

### Required feel

This page should feel:

- simpler than `/pro/`
- more consumer-facing
- more mobile-native
- more immediate

### Required content structure

1. Hero

Preserve the current live-page structure:

- simple headline
- finding a doctor in Panama
- transparent prices
- direct booking
- no calls / no waiting / no friction

2. Three-step flow

This is a major structural element and should remain:

- search
- review
- book

3. “Real problem” section

Preserve the frustration framing:

- time lost by calling clinics
- hidden prices
- waiting days to get appointments

4. Search/results UI section

The page should include a more credible and accurate directory/search module showing:

- specialty
- zone
- price
- availability
- doctor cards

5. Verification / trust section

Must include:

- verified doctors
- visible pricing
- real availability framing

6. Phone-first utility section

Must communicate:

- reminders
- pre/post-consultation information
- history/documents access
- mobile convenience

7. Account creation CTA

The page should end with a simple, clear free account entry point.

### Expected result

The final `/connect/` page should feel like a stronger, more trustworthy healthcare marketplace page for patients in Panama.

It should feel:

- accessible
- practical
- transparent
- mobile-friendly

## Preview Spec

Path:

- `/preview/`

### Strategic role

This is the most important trust surface because it simulates actual product behavior.

It should feel like a real Docti walkthrough, not a concept UI.

### Required feel

The preview should feel:

- product-authentic
- interface-first
- denser than a marketing page
- close to the live seven-step flow

### Required structure

Preserve the seven-step demo map:

1. Dashboard
2. Nueva Consulta
3. Motivo / Protocolo
4. Nota Médica
5. Expediente
6. Calendario
7. Recetas & Voz

### Required implementation goals

1. Step fidelity

Each step should mirror the real public flow closely in:

- label
- UI composition
- state progression
- product vocabulary

2. Demo framing

Preserve public-demo honesty, including:

- `DEMO SIMULADO`

3. Stronger interface realism

The preview should feel less like a generic dashboard and more like the actual Docti doctor flow.

4. Continuity between steps

The transition logic between:

- patient selection
- protocol selection
- note generation
- record view
- calendar
- voice/prescription

should feel coherent and intentional.

5. Product-specific details

Preserve important live cues where appropriate, including:

- consultation flow
- SOAP-style note output
- prescription/voice mode
- doctor/clinic identity

### Expected result

The final `/preview/` should feel like a credible recreation of the real Docti interactive demo with better polish and code quality.

## Improvement Layer After Fidelity

Only after the rebuilt pages are recognizably correct should improvements be added.

Allowed improvements:

- better spacing rhythm
- better responsive layout behavior
- clearer typographic hierarchy
- cleaner product-card systems
- smoother micro-interactions
- cleaner reusable code
- stronger form styling
- more polished preview transitions

Disallowed improvements:

- changing the product story
- changing the page hierarchy
- inventing a new design system unrelated to current Docti
- over-stylizing the site

## Implementation Plan

### Phase 1

Rebuild the homepage as a close replica.

### Phase 2

Rebuild `/pro/` with much higher fidelity to the current live page.

### Phase 3

Rebuild `/connect/` with the correct patient-marketplace structure.

### Phase 4

Rebuild `/preview/` to match the real seven-step public demo more closely.

### Phase 5

Apply quality improvements:

- responsiveness
- consistency
- polish

## Acceptance Standard

The rebuild is successful if:

- it feels unmistakably like Docti
- the user can recognize each page as a rebuilt version of the current live site
- the product split between doctors and patients is clearer
- the preview feels more credible
- improvements feel like upgrades, not a redesign detour

The rebuild fails if:

- it looks like a different company
- it feels generic
- it loses Panama-specific product context
- it weakens the credibility of the current live product story
