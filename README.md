## Next.js App Router Course - Starter

#### Structure
* app : all routes, components
  - /app/lib: functions 
  - /app/ui: components for UI
* public: static assets
* scripts: 
* next.config: auto generated using create-next-app
* **TypeScript** is used .ts or .tsx => in /app/lib/definitions.ts, types are defined manually.
* TypeScript should be auto generated using **prisma.io**

#### Styling - global.css within ui created 
* global css file - /app/ui/global.css - the root layout with TailwindC CSS imported, be added to root component -> /app/layout.tsx
* tailwind or css modules 
* clsx utility package for conditionally add class names -> '/app/ui/invoices/status.tsx'

#### Optimize Fonts & Images & Icons -
* add custom fonts ->**next/font module**: solved layout shift potential problems
   - create a file **/app/ui/fonts.ts** -> keep fonts for this api. Add the font file to layout.tsx
* add images -> next/image
* optimize fonts and images
* icons in **'@heroicons/react/24/outline'**
* use the next/image component  **\<Image\>**  to automatically optimize your images => **\<Image\>** Component is an extension of the HTML <img> tag, and comes with automatic image optimization. Images without dimensions and web fonts are common causes of layout shift. See example in 'page.tsx'

#### file-system routing with page.tsx files - create a new route segment using a folder, and add a page file inside it.
* no react-router needed anymore
* /app/page.tsx => '/' home page
* /app/dashboard/page.tsx => '/dashboard' page

#### layout.tsx
* **layout.tsx** file is a special file to create UI that is shared between multiple pages. 
* /app/layout.tsx is for '/' home page layout. 
* layout.tsx should always have 'children' prop
* Each parent route should have its own layout.tsx file with its 'children' as prop. This 'children' include 'page.tsx' and other folders with 'page.tsx'
*  on navigation, only the page components update while the layout won't re-render. This is called partial rendering, this can be achieved by combining with \<link\> from next/link module to replace \<a\> tag, which will render the whole page when clicked.
* Rootlayout in /app/layout.tsx is required. Any UI you add to the root layout will be shared across all pages in your application. You can use the root layout to modify your \<html\> and \<body\> tags, and add metadata.

#### partial rendering
* with 'layout.tsx' design, on navigation, only the page components update while the layout won't re-render.
* but this has to be achieved with the help of \<link\> from next/link module, not the \<a\> tag.

#### opt-in for client rendering vs default server rendering 
* 'use client'
* by defining a "use client" in a file, all other modules imported into it, including child components, are considered part of the client bundle.
* Client Components can use state (hook), effects(hook), and event listeners, to provide immediate feedback to the user and update the UI.
* Client Components have access to browser APIs, like geolocation or localStorage, allowing you to build UI for specific use cases.
* since usePathName() is a hook, the file nav-links.tsx should be 'use client' directive. use  pathname === link.href  and clsx to decorate active link.

#### active link decoration
* since usePathName() is a hook, the file nav-links.tsx should be 'use client' directive. use  pathname === link.href  and clsx to decorate active link.