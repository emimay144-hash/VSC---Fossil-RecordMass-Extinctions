## Revised development plan

The tool will feature **five distinct fictional ecosystems**, each with at least five inspectable rock layers. Students use realistic-looking rocks and fossils, with annotated diagrams that help them infer changes in fossil abundance and diversity without relying on exact counts.

### Student flow

1. **Choose an ecosystem** and explore its strata.
2. **Inspect at least five layers**, comparing the fossil diagrams and their annotations.
3. **Tap or click where they think the extinction boundary lies.** In some scenarios the evidence will point to a clear boundary; in others, the change may span several layers to represent uncertainty.
4. **Try again if needed.** Reveal the correct answer after five attempts, with a brief explanation.
5. **Set up a simulation** by choosing an environmental factor and adjusting how quickly and severely it changes.
6. **Watch an automatic visualisation** with both a changing landscape and labelled environmental indicators.
7. **Compare runs** side by side, showing the surviving species, biodiversity over time, and resulting fossil layers.

### Scenario and simulation design

Make the five ecosystems visually and biologically distinct, with different starting biodiversity and species traits. Allow students to choose the environmental factor that changes, then adjust its rate and severity.

Keep the simulation visually clear: the environment changes on screen, indicators show what is changing, and annotations connect those changes to species survival and the fossil layers. Make the same underlying scenario data drive the animation, diagrams, and comparison views so they remain consistent.

### Interface and classroom use

- Use realistic rocks and fossils, while keeping labels and diagrams clean enough to read on small screens.
- Provide a prominent reset button.
- Keep results temporary: clear them when students reset or close the page.
- Make all layers inspectable, with touch-friendly controls for phones and tablets.
- Keep essential information available in text and annotations, not only through visual appearance or colour.

### Build order

1. Prototype one ecosystem with five layers, annotated diagrams, and boundary selection.
2. Add retry logic, including answer reveal after five attempts and support for uncertain boundaries.
3. Add the other four ecosystems and their distinct species and fossil patterns.
4. Build environmental-factor controls and automatic simulations.
5. Add side-by-side comparisons of survival, biodiversity, and fossil layers.
6. Test with students and refine the diagrams, instructions, reset behaviour, and mobile layout.

**Key design check:** Ask students to explain what evidence in the diagrams led them to choose a boundary. That will show whether the annotations support inference rather than simply giving away the answer.