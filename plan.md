## Development plan

**Core experience:** Students inspect a simplified 3D rock sequence, use fossil patterns to identify a likely extinction boundary, then change the rate and severity of environmental change and observe how the fossil record might appear afterward.

### 1. Define the learning flow

Build the tool around a short, unguided investigation:

1. **Explore the strata:** Rotate and zoom a geological cross-section; select layers to inspect their fossils.
2. **Look for a change:** Compare fossil abundance and diversity in older and younger layers.
3. **Mark the boundary:** Ask students to identify where a mass extinction likely occurred.
4. **Run a simulation:** Adjust how quickly and severely the environment changes.
5. **Compare outcomes:** See which species survive, how biodiversity changes, and how the resulting layers record that change.

Keep instructions available but unobtrusive, so students can explore freely while still understanding the task.

### 2. Design the geological cross-section

Represent strata as stacked, selectable sedimentary layers. Each layer should show a small, consistent sample of fossil groups, with visual cues for:

- **Abundance:** how many fossil specimens appear in a layer.
- **Diversity:** how many different species or groups appear.
- **Layer order:** older layers below younger layers in the uncomplicated example.
- **Extinction boundary:** a clear point where fossil diversity or abundance drops.

Use labels and a simple side-on view as well as 3D interaction; the scientific comparison should remain understandable even if a student does not rotate the scene. Present fossil counts as evidence from a sample, not a perfect census of all past life. The fossil record is incomplete and preservation varies, so a drop in fossils should be interpreted as a clue rather than automatic proof of an extinction. <citation src="9"></citation>

### 3. Build the fictional scenarios

Create several fictional ecosystems with distinct, easy-to-recognise species groups. Give each group different tolerances to environmental change—for example, some are more vulnerable to a rapid change, while others can survive a wider range of conditions.

Let students control two main variables:

- **Rate:** how quickly environmental conditions change.
- **Severity:** how far conditions move from the starting state.

Show the setting in plain language, such as “slow change” or “large change,” alongside the control. Keep the scenario fictional and make clear that it demonstrates a simplified model, not a prediction of how real organisms would respond.

### 4. Implement the simulation and visual feedback

Use one underlying scenario model to calculate species survival and biodiversity over time. Update the fossil layers from those results, then show:

- a **species-survival display**;
- a **biodiversity-over-time graph**;
- the newly formed strata, with fossil abundance and diversity reflected in each layer.

Include a reset button and a way to compare the starting conditions with the result. Keep the simulation reproducible: the same scenario and settings should produce the same outcome, so students can compare the effect of changing one variable at a time.

### 5. Build the Three.js interface for different screens

Use Three.js for the cross-section and interactive fossils, with ordinary HTML interface controls and charts around it. Design a responsive layout that works with mouse, touch, and keyboard input; test the canvas resizing and camera framing on phone-sized screens as well as tablets and computers. Three.js provides the rendering and scene tools for this kind of 3D model; the interface and controls still need to be designed and tested for the target devices. <citation src="1,3"></citation>

Make the 3D scene useful rather than essential: layer details, counts, labels, and the extinction boundary should also be accessible through the interface, not only through colour or precise touch gestures.

### 6. Validate the teaching tool

Test with a small group of Year 10 students and check whether they can:

- identify the likely extinction boundary from the layers;
- explain their decision using fossil abundance or diversity;
- describe how changing rate or severity affected survival;
- distinguish a model’s simplified results from a complete account of real extinctions.

Also test on common phone, tablet, and computer screen sizes, and check loading time, readable text, keyboard access, colour contrast, and touch-target size.

### Suggested build milestones

1. **Prototype:** one cross-section, selectable layers, and a manual boundary-identification task.
2. **Simulation:** fictional species, rate and severity controls, survival outcomes, graph, and generated fossil layers.
3. **Classroom-ready release:** multiple scenarios, responsive and accessible controls, student-facing prompts, teacher setup notes, and testing fixes.

**A useful first milestone is a clickable prototype of the strata and boundary-identification activity.** It tests the main learning goal before investing in the full simulation.