### Improvements to be done:

## Code:

- figure out data binding in multiple choice inputs
    - probably reactivity is screwed up since start
    - not sure why choice inputs update each other in the context of question
    - use of computed's can be felt when loading /builders as the page takes a few moments
      to load
    - the choice of data structure of survey isn't the best as it requires traversing
      nested properties
- structure of components could be improved
    - builder has gotten pretty big - various inputs might be extracted
- restyling Vuetify components is a bit of pain if there isn't a good understanding of the
  API of Vuetify and how the authors of library have intended that to happen
- if saving the form and viewing survey implementation would work, that'd be cool

## UI/UX:

- the form turned out to be pretty ugly
    - questions aren't clearly distinguished (perhaps shading the background of each
      question)
    - Clearer labels and descriptions of performable actions might be useful
- it is unclear what considerations/actions have to be taken to make screen reader play
  nicely
  with Vuetify
    - e.g. by providing label prop to v-text-field I'd assume that screen reader would tie
      the two together, which doesn't happen, only upon manual navigation of nested dom
      structures
- probably loads of other big and small issues, which are not apparent to me right now as
  I haven't seen actual users working with such tools
