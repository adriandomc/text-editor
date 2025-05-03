# Rich text editor

This is a (very simple) rich text editor written on Javascript, by using Selection and Range API. So far the only way to apply text align and heading is by formatting the first position where the text caret was placed on. The bold, italics and underline styles work as expected by selecting the text you desire to change, however it only works by selecting text inside of a single paragraph/heading.

## Roadmap?

This is on a very early stage and it doesn't work as intended, however, it's pretty fun to play around with. Some future implementations may require the use of other JS libraries, but I intend to keep it as vanilla as possible.

- Make the interface look prettier
- Refactor the code so it is DRY compliant
- Fix the heading/paragraphs issue
- Be able to export the text on an API/storage-friendly format (I'm thinking of JSON, but HTML is kinda straightforward)
- Importing images shouldn't be hard, but it still seems somewhat haunting in my brain
- More things to come!