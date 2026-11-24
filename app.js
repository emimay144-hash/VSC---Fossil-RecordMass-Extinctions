/* Fossil Layers and Mass Extinction Explorer
   Simplified fictional teaching model. */
(function () {
  'use strict';

  const STEPS = 5;

  const SCENARIOS = [
    {
      id: 'reef-shallows',
      name: 'Reef Shallows',
      description: 'A warm, shallow reef with shelled, branching, and swimming species. A sudden environmental shift changes conditions in the water.',
      species: [
        { id: 'spiral-shells', name: 'Spiral Shells', color: '#d97706', shape: 'cone', rateTol: 70, sevTol: 70, baseCount: 4, note: 'Tolerates moderate change in pace and size.' },
        { id: 'fan-corals', name: 'Fan Corals', color: '#e11d48', shape: 'box', rateTol: 30, sevTol: 45, baseCount: 4, note: 'Vulnerable to rapid change and large shifts.' },
        { id: 'drift-swimmers', name: 'Drift Swimmers', color: '#2563eb', shape: 'sphere', rateTol: 80, sevTol: 35, baseCount: 3, note: 'Can cope with fast change but not severe conditions.' },
        { id: 'burrow-clams', name: 'Burrow Clams', color: '#7c3aed', shape: 'cylinder', rateTol: 35, sevTol: 85, baseCount: 3, note: 'Can survive large change if it happens slowly.' },
        { id: 'mat-algae', name: 'Mat Algae', color: '#15803d', shape: 'dodeca', rateTol: 85, sevTol: 80, baseCount: 3, note: 'Survives a wide range of conditions.' }
      ],
      baselineLayers: [
        { name: 'Layer 1 (oldest)', age: 'Oldest', fossils: { 'spiral-shells': 4, 'fan-corals': 4, 'drift-swimmers': 3, 'burrow-clams': 3, 'mat-algae': 3 } },
        { name: 'Layer 2', age: 'Older', fossils: { 'spiral-shells': 4, 'fan-corals': 4, 'drift-swimmers': 3, 'burrow-clams': 3, 'mat-algae': 3 } },
        { name: 'Layer 3', age: 'Middle', fossils: { 'spiral-shells': 4, 'fan-corals': 3, 'drift-swimmers': 3, 'burrow-clams': 3, 'mat-algae': 3 } },
        { name: 'Layer 4', age: 'Younger', fossils: { 'spiral-shells': 2, 'burrow-clams': 2, 'mat-algae': 3 } },
        { name: 'Layer 5 (youngest)', age: 'Youngest', fossils: { 'spiral-shells': 2, 'burrow-clams': 1, 'mat-algae': 3 } }
      ],
      boundaryAfterIndex: 2
    },
    {
      id: 'fern-delta',
      name: 'Fern Delta',
      description: 'A coastal delta with plant-like mats, armored crawlers, and floating filter feeders. Conditions shift across the floodplain.',
      species: [
        { id: 'frond-mats', name: 'Frond Mats', color: '#16a34a', shape: 'box', rateTol: 75, sevTol: 75, baseCount: 4, note: 'Handles a fairly wide range of change.' },
        { id: 'plate-crawlers', name: 'Plate Crawlers', color: '#92400e', shape: 'cylinder', rateTol: 40, sevTol: 40, baseCount: 4, note: 'Sensitive to both rapid and severe change.' },
        { id: 'sail-floaters', name: 'Sail Floaters', color: '#0891b2', shape: 'cone', rateTol: 85, sevTol: 30, baseCount: 3, note: 'Vulnerable when conditions become very severe.' },
        { id: 'mud-tubes', name: 'Mud Tubes', color: '#6d28d9', shape: 'sphere', rateTol: 25, sevTol: 80, baseCount: 3, note: 'Survives large change only when it is slow.' },
        { id: 'seed-pods', name: 'Seed Pods', color: '#ca8a04', shape: 'dodeca', rateTol: 65, sevTol: 60, baseCount: 3, note: 'Moderately tolerant to change.' }
      ],
      baselineLayers: [
        { name: 'Layer 1 (oldest)', age: 'Oldest', fossils: { 'frond-mats': 4, 'plate-crawlers': 4, 'sail-floaters': 3, 'mud-tubes': 3, 'seed-pods': 3 } },
        { name: 'Layer 2', age: 'Older', fossils: { 'frond-mats': 4, 'plate-crawlers': 4, 'sail-floaters': 3, 'mud-tubes': 3, 'seed-pods': 3 } },
        { name: 'Layer 3', age: 'Middle', fossils: { 'frond-mats': 4, 'plate-crawlers': 1, 'sail-floaters': 3, 'mud-tubes': 2, 'seed-pods': 2 } },
        { name: 'Layer 4', age: 'Younger', fossils: { 'frond-mats': 3, 'sail-floaters': 1, 'mud-tubes': 2, 'seed-pods': 1 } },
        { name: 'Layer 5 (youngest)', age: 'Youngest', fossils: { 'frond-mats': 3, 'mud-tubes': 2 } }
      ],
      boundaryAfterIndex: 1
    },
    {
      id: 'tidal-plains',
      name: 'Tidal Plains',
      description: 'A broad tidal plain with burrowers, grazers, and floating colonies. A changing environment alters habitats over time.',
      species: [
        { id: 'coil-grazers', name: 'Coil Grazers', color: '#0f766e', shape: 'cone', rateTol: 55, sevTol: 65, baseCount: 4, note: 'Moderately tolerant of changing conditions.' },
        { id: 'ridge-shells', name: 'Ridge Shells', color: '#b45309', shape: 'box', rateTol: 30, sevTol: 55, baseCount: 4, note: 'Struggles when change happens quickly.' },
        { id: 'sky-jellies', name: 'Sky Jellies', color: '#0284c7', shape: 'sphere', rateTol: 90, sevTol: 25, baseCount: 3, note: 'Copes with rapid change but not severe shifts.' },
        { id: 'spine-burrowers', name: 'Spine Burrowers', color: '#be123c', shape: 'cylinder', rateTol: 45, sevTol: 85, baseCount: 3, note: 'Can tolerate severe change if it is gradual.' },
        { id: 'dust-moss', name: 'Dust Moss', color: '#65a30d', shape: 'dodeca', rateTol: 80, sevTol: 70, baseCount: 3, note: 'Broad tolerance to environmental change.' }
      ],
      baselineLayers: [
        { name: 'Layer 1 (oldest)', age: 'Oldest', fossils: { 'coil-grazers': 4, 'ridge-shells': 4, 'sky-jellies': 3, 'spine-burrowers': 3, 'dust-moss': 3 } },
        { name: 'Layer 2', age: 'Older', fossils: { 'coil-grazers': 4, 'ridge-shells': 4, 'sky-jellies': 3, 'spine-burrowers': 3, 'dust-moss': 3 } },
        { name: 'Layer 3', age: 'Middle', fossils: { 'coil-grazers': 4, 'ridge-shells': 3, 'sky-jellies': 3, 'spine-burrowers': 3, 'dust-moss': 3 } },
        { name: 'Layer 4', age: 'Younger', fossils: { 'coil-grazers': 3, 'ridge-shells': 3, 'sky-jellies': 2, 'spine-burrowers': 3, 'dust-moss': 3 } },
        { name: 'Layer 5 (youngest)', age: 'Youngest', fossils: { 'coil-grazers': 1, 'spine-burrowers': 2, 'dust-moss': 3 } }
      ],
      boundaryAfterIndex: 3
    }
  ];

  // --- State ---
  let currentScenario = SCENARIOS[0];
  let selectedLayerIndex = 2;
  let markedBoundaryAfterIndex = null;
  let boundaryChecked = false;
  let simulationResult = null;
  let sceneState = null;

  // --- DOM ---
  const els = {};

  function cacheEls() {
    ['scenario-select','scenario-description','layer-list','layer-details','boundary-select','boundary-feedback',
     'check-boundary','clear-boundary','rate-slider','severity-slider','rate-value','severity-value','rate-label','severity-label',
     'run-simulation','reset-simulation','survival-display','biodiversity-graph','comparison-display','three-root'
    ].forEach(id => { els[id] = document.getElementById(id); });
  }

  // --- Helpers ---
  function speciesMap(scenario) {
    const m = {};
    scenario.species.forEach(s => m[s.id] = s);
    return m;
  }

  function layerStats(layer, scenario) {
    const map = speciesMap(scenario);
    let abundance = 0;
    let diversity = 0;
    const present = [];
    scenario.species.forEach(sp => {
      const count = layer.fossils[sp.id] || 0;
      if (count > 0) {
        diversity += 1;
        abundance += count;
        present.push({ ...sp, count });
      }
    });
    return { abundance, diversity, present, totalSpecies: scenario.species.length };
  }

  function rateDescriptor(v) {
    if (v <= 20) return 'Very slow change';
    if (v <= 40) return 'Slow change';
    if (v <= 60) return 'Moderate rate of change';
    if (v <= 80) return 'Fast change';
    return 'Very rapid change';
  }
  function severityDescriptor(v) {
    if (v <= 20) return 'Very small change';
    if (v <= 40) return 'Small change';
    if (v <= 60) return 'Moderate change';
    if (v <= 80) return 'Large change';
    return 'Very large change';
  }

  function appliedSeverityAtStep(severity, rate, step) {
    // Deterministic ramp: higher rate reaches target severity sooner.
    const speed = 0.35 + (rate / 100) * 1.25; // 0.35..1.6
    return Math.min(severity, severity * step * speed / 3.2);
  }

  function runSimulation(scenario, rate, severity) {
    const alive = {};
    scenario.species.forEach(sp => { alive[sp.id] = true; });
    const startCommunity = scenario.baselineLayers[scenario.boundaryAfterIndex];
    const startStats = layerStats(startCommunity, scenario);
    const timeline = [];
    const generatedLayers = [];

    for (let step = 1; step <= STEPS; step++) {
      const envSeverity = appliedSeverityAtStep(severity, rate, step);
      scenario.species.forEach(sp => {
        if (!alive[sp.id]) return;
        // Rapid change can cause immediate loss; severe conditions can cause loss when reached.
        const rateShock = rate > sp.rateTol;
        const severityShock = envSeverity > sp.sevTol;
        if (rateShock || severityShock) alive[sp.id] = false;
      });
      const fossils = {};
      let diversity = 0;
      scenario.species.forEach(sp => {
        const count = alive[sp.id] ? sp.baseCount : 0;
        fossils[sp.id] = count;
        if (count > 0) diversity += 1;
      });
      timeline.push({ step, envSeverity: Math.round(envSeverity), diversity });
      generatedLayers.push({
        name: `Simulated layer S${step}`,
        age: `After change, time step ${step}`,
        fossils,
        simulated: true,
        step
      });
    }

    const survival = scenario.species.map(sp => ({
      ...sp,
      survived: !!alive[sp.id],
      startCount: (startCommunity.fossils[sp.id] || 0)
    }));

    return {
      rate, severity,
      rateText: rateDescriptor(rate),
      severityText: severityDescriptor(severity),
      startCommunity,
      startStats,
      timeline,
      generatedLayers,
      survival,
      finalDiversity: timeline[timeline.length - 1].diversity,
      startDiversity: startStats.diversity
    };
  }

  // --- Rendering: controls and text ---
  function initScenarioSelect() {
    els['scenario-select'].innerHTML = SCENARIOS.map(s => `<option value="${s.id}">${escapeHtml(s.name)}</option>`).join('');
    els['scenario-select'].addEventListener('change', () => {
      const sc = SCENARIOS.find(s => s.id === els['scenario-select'].value) || SCENARIOS[0];
      setScenario(sc);
    });
  }

  function setScenario(scenario) {
    currentScenario = scenario;
    selectedLayerIndex = Math.max(0, scenario.boundaryAfterIndex);
    markedBoundaryAfterIndex = null;
    boundaryChecked = false;
    simulationResult = null;
    els['scenario-description'].textContent = scenario.description;
    renderBoundaryOptions();
    renderAll();
  }

  function renderBoundaryOptions() {
    const opts = [];
    for (let i = 0; i < currentScenario.baselineLayers.length - 1; i++) {
      const below = currentScenario.baselineLayers[i];
      const above = currentScenario.baselineLayers[i + 1];
      opts.push(`<option value="${i}">Between ${escapeHtml(below.name)} and ${escapeHtml(above.name)}</option>`);
    }
    els['boundary-select'].innerHTML = opts.join('');
  }

  function renderLayerList() {
    const layers = displayedLayers();
    // Display top-to-bottom (youngest first) for readability, but keep index mapping.
    const items = layers.map((layer, idx) => ({ layer, idx })).reverse();
    els['layer-list'].innerHTML = items.map(({ layer, idx }) => {
      const stats = layerStats(layer, currentScenario);
      const selected = idx === selectedLayerIndex;
      const simTag = layer.simulated ? ' <span class="layer-meta">(simulated)</span>' : '';
      return `<button type="button" class="layer-item ${selected ? 'selected' : ''}" role="listitem" data-index="${idx}" aria-pressed="${selected}">
        <span><strong>${escapeHtml(layer.name)}</strong>${simTag}<br><span class="layer-meta">${escapeHtml(layer.age || '')}</span></span>
        <span class="layer-meta">Diversity ${stats.diversity} · Sample ${stats.abundance}</span>
      </button>`;
    }).join('');
    els['layer-list'].querySelectorAll('.layer-item').forEach(btn => {
      btn.addEventListener('click', () => {
        selectedLayerIndex = Number(btn.dataset.index);
        renderLayerList();
        renderLayerDetails();
        updateSceneSelection();
      });
    });
  }

  function displayedLayers() {
    // Baseline layers plus generated simulated layers above them when available.
    const base = currentScenario.baselineLayers.map(l => ({ ...l, simulated: false }));
    if (simulationResult) return base.concat(simulationResult.generatedLayers);
    return base;
  }

  function renderLayerDetails() {
    const layers = displayedLayers();
    const layer = layers[selectedLayerIndex] || layers[0];
    if (!layer) { els['layer-details'].innerHTML = ''; return; }
    const stats = layerStats(layer, currentScenario);
    const rows = currentScenario.species.map(sp => {
      const count = layer.fossils[sp.id] || 0;
      return `<tr>
        <td><span class="swatch" style="background:${sp.color};display:inline-block;vertical-align:middle;margin-right:0.35rem"></span>${escapeHtml(sp.name)}</td>
        <td>${count}</td>
      </tr>`;
    }).join('');
    const simNote = layer.simulated ? '<p><strong>Simulated layer:</strong> generated from the current rate and severity settings.</p>' : '<p><strong>Observed sample layer:</strong> part of the scenario\'s fossil record sample.</p>';
    els['layer-details'].innerHTML = `
      ${simNote}
      <p><strong>${escapeHtml(layer.name)}</strong> — ${escapeHtml(layer.age || '')}</p>
      <div class="stat-grid">
        <div class="stat"><strong>${stats.diversity}</strong> species groups in sample (diversity)</div>
        <div class="stat"><strong>${stats.abundance}</strong> fossil specimens in sample (abundance)</div>
      </div>
      <table class="evidence-table" aria-label="Fossil sample counts for selected layer">
        <thead><tr><th>Species group</th><th>Sample specimens</th></tr></thead>
        <tbody>${rows}</tbody>
      </table>
      <p class="note">Counts are evidence from a sample. A low count can be a clue, but preservation varies and the fossil record is incomplete.</p>
    `;
  }

  function renderBoundaryFeedback(message, type) {
    els['boundary-feedback'].className = 'feedback ' + (type || 'info');
    els['boundary-feedback'].textContent = message || '';
  }

  function checkBoundary() {
    const chosen = Number(els['boundary-select'].value);
    markedBoundaryAfterIndex = chosen;
    boundaryChecked = true;
    const correct = currentScenario.boundaryAfterIndex;
    const below = currentScenario.baselineLayers[correct];
    const above = currentScenario.baselineLayers[correct + 1];
    const belowStats = layerStats(below, currentScenario);
    const aboveStats = layerStats(above, currentScenario);
    if (chosen === correct) {
      renderBoundaryFeedback(
        `Likely boundary identified: between ${below.name} and ${above.name}. Evidence: diversity changes from ${belowStats.diversity} to ${aboveStats.diversity} species groups and abundance from ${belowStats.abundance} to ${aboveStats.abundance} sample specimens. This drop is a clue from fossil samples, not a complete census.`,
        'good'
      );
    } else {
      renderBoundaryFeedback(
        `Not the strongest location. Compare fossil abundance and diversity across adjacent layers. Look for where the sample shows a clear drop from an older layer to a younger layer.`,
        'warn'
      );
    }
    updateSceneBoundary();
  }

  function clearBoundary() {
    markedBoundaryAfterIndex = null;
    boundaryChecked = false;
    renderBoundaryFeedback('Boundary mark cleared. You can inspect the layers and choose again.', 'info');
    updateSceneBoundary();
  }

  function updateSliderLabels() {
    const r = Number(els['rate-slider'].value);
    const s = Number(els['severity-slider'].value);
    els['rate-value'].textContent = r;
    els['severity-value'].textContent = s;
    els['rate-label'].textContent = rateDescriptor(r);
    els['severity-label'].textContent = severityDescriptor(s);
  }

  function renderSurvival() {
    if (!simulationResult) {
      els['survival-display'].innerHTML = '<p class="note">Run the simulation to see which species groups survive in this simplified model.</p>';
      return;
    }
    const r = simulationResult;
    const items = r.survival.map(sp => {
      const status = sp.survived ? 'Survived in the sample' : 'Lost from later fossil samples';
      const reason = sp.survived
        ? `Tolerated this rate (${sp.rateTol} tolerance) and severity (${sp.sevTol} tolerance) in the model.`
        : explainLoss(sp, r.rate, r.severity);
      return `<li class="species-item ${sp.survived ? 'survived' : 'lost'}">
        <span class="swatch" style="background:${sp.color}"></span>
        <div><div><strong>${escapeHtml(sp.name)}</strong> — <span class="status">${status}</span></div>
        <div class="panel-help">${escapeHtml(reason)}</div></div>
      </li>`;
    }).join('');
    els['survival-display'].innerHTML = `
      <p><strong>Settings:</strong> ${escapeHtml(r.rateText)} (rate ${r.rate}) and ${escapeHtml(r.severityText)} (severity ${r.severity}).</p>
      <ul class="species-list">${items}</ul>
    `;
  }

  function explainLoss(sp, rate, severity) {
    const parts = [];
    if (rate > sp.rateTol) parts.push(`the change was too rapid for this group (rate ${rate} above tolerance ${sp.rateTol})`);
    if (severity > sp.sevTol) parts.push(`conditions became too severe for this group (severity ${severity} above tolerance ${sp.sevTol})`);
    if (!parts.length) parts.push('conditions exceeded this group\'s tolerance during the change');
    return 'In this simplified model, ' + parts.join(' and ') + '.';
  }

  function renderGraph() {
    if (!simulationResult) {
      els['biodiversity-graph'].innerHTML = '<p class="note">A biodiversity-over-time graph will appear after you run the simulation.</p>';
      return;
    }
    const r = simulationResult;
    const points = [{ step: 0, label: 'Start', diversity: r.startDiversity }].concat(
      r.timeline.map(t => ({ step: t.step, label: 'S' + t.step, diversity: t.diversity }))
    );
    const maxD = Math.max(currentScenario.species.length, 1);
    const w = 520, h = 260, padL = 48, padR = 20, padT = 20, padB = 45;
    const plotW = w - padL - padR, plotH = h - padT - padB;
    const x = i => padL + (i / (points.length - 1)) * plotW;
    const y = v => padT + plotH - (v / maxD) * plotH;
    const line = points.map((p, i) => `${i === 0 ? 'M' : 'L'} ${x(i).toFixed(1)} ${y(p.diversity).toFixed(1)}`).join(' ');
    const dots = points.map((p, i) => `<circle cx="${x(i)}" cy="${y(p.diversity)}" r="4.5" fill="#1f5f99"><title>${escapeHtml(p.label)}: diversity ${p.diversity}</title></circle>`).join('');
    const xLabels = points.map((p, i) => `<text x="${x(i)}" y="${h - 18}" text-anchor="middle" font-size="12" fill="#142033">${escapeHtml(p.label)}</text>`).join('');
    const yTicks = [];
    for (let v = 0; v <= maxD; v++) {
      const yy = y(v);
      yTicks.push(`<line x1="${padL}" y1="${yy}" x2="${w - padR}" y2="${yy}" stroke="#d9e2ef" stroke-width="1" />`);
      yTicks.push(`<text x="${padL - 8}" y="${yy + 4}" text-anchor="end" font-size="12" fill="#142033">${v}</text>`);
    }
    const desc = `Biodiversity starts at ${r.startDiversity} species groups and ends at ${r.finalDiversity} species groups after 5 simulated time steps.`;
    els['biodiversity-graph'].innerHTML = `
      <svg viewBox="0 0 ${w} ${h}" role="img" aria-labelledby="graph-title graph-desc">
        <title id="graph-title">Biodiversity over time</title>
        <desc id="graph-desc">${escapeHtml(desc)}</desc>
        ${yTicks.join('')}
        <line x1="${padL}" y1="${padT}" x2="${padL}" y2="${h - padB}" stroke="#44566f" />
        <line x1="${padL}" y1="${h - padB}" x2="${w - padR}" y2="${h - padB}" stroke="#44566f" />
        <path d="${line}" fill="none" stroke="#1f5f99" stroke-width="3" />
        ${dots}
        ${xLabels}
        <text x="${padL - 36}" y="${h / 2}" text-anchor="middle" font-size="12" fill="#142033" transform="rotate(-90 ${padL - 36} ${h / 2})">Species groups</text>
        <text x="${w / 2}" y="${h - 2}" text-anchor="middle" font-size="12" fill="#142033">Time</text>
      </svg>
      <table class="evidence-table" aria-label="Biodiversity values by time step" style="margin-top:0.5rem">
        <thead><tr><th>Time</th><th>Applied change level</th><th>Diversity (species groups)</th></tr></thead>
        <tbody>
          <tr><td>Start</td><td>0</td><td>${r.startDiversity}</td></tr>
          ${r.timeline.map(t => `<tr><td>Step ${t.step}</td><td>${t.envSeverity}</td><td>${t.diversity}</td></tr>`).join('')}
        </tbody>
      </table>
      <p class="graph-caption">${escapeHtml(desc)}</p>
    `;
  }

  function renderComparison() {
    const startLayer = currentScenario.baselineLayers[currentScenario.boundaryAfterIndex];
    const startStats = layerStats(startLayer, currentScenario);
    const startList = miniLayerList([startLayer], 'Starting condition sample');
    let resultHtml = '<p class="note">Run the simulation to generate new layers from the model.</p>';
    if (simulationResult) {
      const r = simulationResult;
      resultHtml = `
        <p><strong>Settings:</strong> ${escapeHtml(r.rateText)}, ${escapeHtml(r.severityText)}.</p>
        <p><strong>Result:</strong> diversity changed from ${r.startDiversity} to ${r.finalDiversity} species groups in the sample.</p>
        ${miniLayerList(r.generatedLayers, 'Simulated layers (youngest at top in list)')}
      `;
    }
    els['comparison-display'].innerHTML = `
      <div class="comparison-columns">
        <div class="compare-card">
          <h4>Starting conditions</h4>
          <p class="panel-help">Based on the last healthy sample before the marked extinction in this scenario (${escapeHtml(startLayer.name)}).</p>
          <p>Diversity: <strong>${startStats.diversity}</strong> · Abundance: <strong>${startStats.abundance}</strong></p>
          ${startList}
        </div>
        <div class="compare-card">
          <h4>After simulation</h4>
          ${resultHtml}
        </div>
      </div>
    `;
  }

  function miniLayerList(layers, label) {
    const shown = layers.slice().reverse(); // youngest first for reading
    return `<div aria-label="${escapeHtml(label)}">${shown.map(layer => {
      const stats = layerStats(layer, currentScenario);
      const fossils = currentScenario.species.filter(sp => (layer.fossils[sp.id] || 0) > 0).map(sp => escapeHtml(sp.name)).join(', ') || 'No fossil groups in sample';
      return `<div class="mini-layer"><strong>${escapeHtml(layer.name)}</strong>
        <div class="layer-meta">Diversity ${stats.diversity}, abundance ${stats.abundance}</div>
        <div class="layer-meta">${fossils}</div></div>`;
    }).join('')}</div>`;
  }

  function renderAll() {
    renderLayerList();
    renderLayerDetails();
    if (boundaryChecked && markedBoundaryAfterIndex !== null) {
      checkBoundary(); // refresh message for scenario
    } else {
      renderBoundaryFeedback('No boundary marked yet.', 'info');
    }
    renderSurvival();
    renderGraph();
    renderComparison();
    updateScene();
  }

  function escapeHtml(s) {
    return String(s).replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
  }

  // --- Simulation actions ---
  function doRunSimulation() {
    const rate = Number(els['rate-slider'].value);
    const severity = Number(els['severity-slider'].value);
    simulationResult = runSimulation(currentScenario, rate, severity);
    // keep selection in range; prefer first simulated layer to show result
    selectedLayerIndex = currentScenario.baselineLayers.length; // first simulated
    renderAll();
  }

  function doResetSimulation() {
    simulationResult = null;
    selectedLayerIndex = Math.min(selectedLayerIndex, currentScenario.baselineLayers.length - 1);
    renderAll();
  }

  // --- Three.js scene ---
  function initScene() {
    if (typeof THREE === 'undefined') {
      els['three-root'].innerHTML = '<p style="padding:1rem">3D view could not load. The layer list and evidence panels still contain all investigation details.</p>';
      return;
    }
    const container = els['three-root'];
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0xeaf2fb);

    const camera = new THREE.PerspectiveCamera(45, 1, 0.1, 100);
    camera.position.set(7, 5.5, 8);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: false });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
    container.appendChild(renderer.domElement);

    const ambient = new THREE.AmbientLight(0xffffff, 0.8);
    scene.add(ambient);
    const dir = new THREE.DirectionalLight(0xffffff, 0.8);
    dir.position.set(5, 10, 7);
    scene.add(dir);

    const root = new THREE.Group();
    scene.add(root);

    const state = {
      container, scene, camera, renderer, root,
      layerMeshes: [], fossilMeshes: [], boundaryMesh: null,
      targetRotX: -0.35, targetRotY: 0.55, rotX: -0.35, rotY: 0.55,
      zoom: 1, targetZoom: 1,
      dragging: false, lastX: 0, lastY: 0, pinchDist: null
    };
    sceneState = state;

    setupSceneControls(state);
    resizeScene();
    updateScene();
    animate();
    window.addEventListener('resize', resizeScene);
  }

  function setupSceneControls(state) {
    const el = state.container;
    el.tabIndex = 0;
    el.setAttribute('role', 'img');
    el.setAttribute('aria-label', '3D cross-section of rock layers. Use layer buttons to inspect details.');
    const onDown = (x, y) => { state.dragging = true; state.lastX = x; state.lastY = y; };
    const onMove = (x, y) => {
      if (!state.dragging) return;
      const dx = x - state.lastX;
      const dy = y - state.lastY;
      state.lastX = x; state.lastY = y;
      state.targetRotY += dx * 0.01;
      state.targetRotX += dy * 0.01;
      state.targetRotX = Math.max(-1.2, Math.min(0.6, state.targetRotX));
    };
    const onUp = () => { state.dragging = false; state.pinchDist = null; };

    el.addEventListener('mousedown', e => onDown(e.clientX, e.clientY));
    window.addEventListener('mousemove', e => onMove(e.clientX, e.clientY));
    window.addEventListener('mouseup', onUp);
    el.addEventListener('wheel', e => { e.preventDefault(); state.targetZoom *= (e.deltaY > 0 ? 1.08 : 0.92); state.targetZoom = Math.max(0.6, Math.min(2.2, state.targetZoom)); }, { passive: false });

    el.addEventListener('touchstart', e => {
      if (e.touches.length === 1) onDown(e.touches[0].clientX, e.touches[0].clientY);
      else if (e.touches.length === 2) state.pinchDist = distTouches(e.touches);
    }, { passive: true });
    el.addEventListener('touchmove', e => {
      if (e.touches.length === 1) onMove(e.touches[0].clientX, e.touches[0].clientY);
      else if (e.touches.length === 2) {
        const d = distTouches(e.touches);
        if (state.pinchDist) {
          state.targetZoom *= state.pinchDist / d;
          state.targetZoom = Math.max(0.6, Math.min(2.2, state.targetZoom));
        }
        state.pinchDist = d;
      }
    }, { passive: true });
    el.addEventListener('touchend', onUp);
    el.addEventListener('keydown', e => {
      const step = 0.08;
      if (e.key === 'ArrowLeft') { state.targetRotY -= step; e.preventDefault(); }
      if (e.key === 'ArrowRight') { state.targetRotY += step; e.preventDefault(); }
      if (e.key === 'ArrowUp') { state.targetRotX -= step; e.preventDefault(); }
      if (e.key === 'ArrowDown') { state.targetRotX += step; e.preventDefault(); }
      if (e.key === '+' || e.key === '=') { state.targetZoom *= 0.92; e.preventDefault(); }
      if (e.key === '-' || e.key === '_') { state.targetZoom *= 1.08; e.preventDefault(); }
      state.targetRotX = Math.max(-1.2, Math.min(0.6, state.targetRotX));
      state.targetZoom = Math.max(0.6, Math.min(2.2, state.targetZoom));
    });
  }
  function distTouches(t) { const dx = t[0].clientX - t[1].clientX, dy = t[0].clientY - t[1].clientY; return Math.hypot(dx, dy); }

  function resizeScene() {
    if (!sceneState) return;
    const { container, camera, renderer } = sceneState;
    const w = container.clientWidth || 300;
    const h = container.clientHeight || 260;
    camera.aspect = w / h;
    camera.updateProjectionMatrix();
    renderer.setSize(w, h, false);
  }

  function clearGroup(group) {
    while (group.children.length) {
      const obj = group.children.pop();
      if (obj.geometry) obj.geometry.dispose();
      if (obj.material) {
        if (Array.isArray(obj.material)) obj.material.forEach(m => m.dispose()); else obj.material.dispose();
      }
    }
  }

  function updateScene() {
    if (!sceneState) return;
    const layers = displayedLayers();
    clearGroup(sceneState.root);
    sceneState.layerMeshes = [];
    sceneState.fossilMeshes = [];
    sceneState.boundaryMesh = null;

    const thickness = 0.7;
    const gap = 0.06;
    const width = 5.2;
    const depth = 3.2;
    const totalH = layers.length * (thickness + gap);
    const baseY = -totalH / 2;

    layers.forEach((layer, i) => {
      const y = baseY + i * (thickness + gap) + thickness / 2;
      const isSelected = i === selectedLayerIndex;
      const isSim = !!layer.simulated;
      const baseColor = isSim ? 0xcfe3d6 : layerColor(i, currentScenario.baselineLayers.length);
      const geom = new THREE.BoxGeometry(width, thickness, depth);
      const mat = new THREE.MeshStandardMaterial({ color: baseColor, roughness: 0.9, metalness: 0.0 });
      const mesh = new THREE.Mesh(geom, mat);
      mesh.position.set(0, y, 0);
      mesh.userData = { layerIndex: i };
      sceneState.root.add(mesh);
      sceneState.layerMeshes.push(mesh);

      if (isSelected) {
        const edges = new THREE.EdgesGeometry(geom);
        const line = new THREE.LineSegments(edges, new THREE.LineBasicMaterial({ color: 0xb38f00 }));
        line.position.copy(mesh.position);
        sceneState.root.add(line);
      }

      addFossilsForLayer(sceneState.root, layer, i, y, width, depth, thickness);
    });

    addBoundaryMarker(sceneState.root, layers.length, baseY, thickness, gap, width, depth);
    addBaseLabels(sceneState.root, baseY, totalH, width);
    updateSceneSelection();
  }

  function layerColor(i, baseCount) {
    const palette = [0xc8b79a, 0xbfae8f, 0xd2c2a2, 0xb7a889, 0xcdbf9e, 0xbda986, 0xd6c7a8, 0xb39f84];
    if (i < baseCount) return palette[i % palette.length];
    // simulated layers: greenish tint progression
    const simPalette = [0xbfd9c7, 0xb5d3bf, 0xaacdb6, 0xa0c7ae, 0x95c1a5];
    return simPalette[(i - baseCount) % simPalette.length];
  }

  function addFossilsForLayer(root, layer, layerIndex, y, width, depth, thickness) {
    const entries = [];
    currentScenario.species.forEach(sp => {
      const count = layer.fossils[sp.id] || 0;
      for (let k = 0; k < count; k++) entries.push(sp);
    });
    // deterministic placement
    entries.forEach((sp, n) => {
      const col = n % 5;
      const row = Math.floor(n / 5);
      const px = -width / 2 + 0.6 + col * ((width - 1.2) / 4);
      const pz = -depth / 2 + 0.55 + (row % 3) * ((depth - 1.1) / 2);
      const py = y + thickness / 2 + 0.12 + (row * 0.02);
      const mesh = createFossilMesh(sp);
      mesh.position.set(px, py, pz);
      mesh.rotation.y = (layerIndex * 0.7 + n * 0.9);
      mesh.userData = { layerIndex, speciesId: sp.id };
      root.add(mesh);
    });
  }

  function createFossilMesh(sp) {
    let geom;
    const size = 0.13;
    switch (sp.shape) {
      case 'cone': geom = new THREE.ConeGeometry(size, size * 1.8, 6); break;
      case 'box': geom = new THREE.BoxGeometry(size * 1.4, size * 0.7, size * 1.8); break;
      case 'sphere': geom = new THREE.SphereGeometry(size, 10, 8); break;
      case 'cylinder': geom = new THREE.CylinderGeometry(size * 0.7, size * 0.7, size * 1.7, 8); break;
      case 'dodeca': geom = new THREE.DodecahedronGeometry(size * 0.95, 0); break;
      default: geom = new THREE.SphereGeometry(size, 8, 6);
    }
    const mat = new THREE.MeshStandardMaterial({ color: new THREE.Color(sp.color), roughness: 0.5, metalness: 0.1 });
    return new THREE.Mesh(geom, mat);
  }

  function addBoundaryMarker(root, layerCount, baseY, thickness, gap, width, depth) {
    if (markedBoundaryAfterIndex === null) return;
    const idx = markedBoundaryAfterIndex;
    if (idx < 0 || idx >= layerCount - 1) return;
    const yBelow = baseY + idx * (thickness + gap) + thickness / 2;
    const y = yBelow + thickness / 2 + gap / 2;
    const geom = new THREE.BoxGeometry(width + 0.2, 0.04, depth + 0.2);
    const color = (boundaryChecked && idx === currentScenario.boundaryAfterIndex) ? 0x2f855a : 0xd97706;
    const mat = new THREE.MeshBasicMaterial({ color, transparent: true, opacity: 0.9 });
    const mesh = new THREE.Mesh(geom, mat);
    mesh.position.set(0, y, 0);
    root.add(mesh);
    sceneState.boundaryMesh = mesh;
  }

  function addBaseLabels(root, baseY, totalH, width) {
    // Simple markers: older/younger arrows using thin boxes (text is in UI for accessibility)
    const arrowMat = new THREE.MeshBasicMaterial({ color: 0x44566f });
    const mk = (y, s) => {
      const g = new THREE.BoxGeometry(0.08, s, 0.08);
      const m = new THREE.Mesh(g, arrowMat);
      m.position.set(-width / 2 - 0.35, y, 0);
      root.add(m);
    };
    mk(baseY + totalH * 0.2, 0.6);
    mk(baseY + totalH * 0.8, 0.6);
  }

  function updateSceneSelection() {
    if (!sceneState) return;
    sceneState.layerMeshes.forEach((mesh, i) => {
      const selected = i === selectedLayerIndex;
      mesh.material.emissive = new THREE.Color(selected ? 0x665500 : 0x000000);
      mesh.material.emissiveIntensity = selected ? 0.25 : 0;
    });
  }

  function updateSceneBoundary() {
    updateScene();
  }

  function animate() {
    if (!sceneState) return;
    requestAnimationFrame(animate);
    const s = sceneState;
    s.rotX += (s.targetRotX - s.rotX) * 0.12;
    s.rotY += (s.targetRotY - s.rotY) * 0.12;
    s.zoom += (s.targetZoom - s.zoom) * 0.12;
    s.root.rotation.x = s.rotX;
    s.root.rotation.y = s.rotY;
    s.camera.position.set(7 / s.zoom, 5.5 / s.zoom, 8 / s.zoom);
    s.camera.lookAt(0, 0, 0);
    s.renderer.render(s.scene, s.camera);
  }

  // --- Events ---
  function bindEvents() {
    els['check-boundary'].addEventListener('click', checkBoundary);
    els['clear-boundary'].addEventListener('click', clearBoundary);
    els['rate-slider'].addEventListener('input', updateSliderLabels);
    els['severity-slider'].addEventListener('input', updateSliderLabels);
    els['run-simulation'].addEventListener('click', doRunSimulation);
    els['reset-simulation'].addEventListener('click', doResetSimulation);
  }

  function init() {
    cacheEls();
    initScenarioSelect();
    bindEvents();
    updateSliderLabels();
    setScenario(SCENARIOS[0]);
    initScene();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
