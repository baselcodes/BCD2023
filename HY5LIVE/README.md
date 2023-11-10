# HY5LIVE
Basel Codes Day 2023  
cc [teddavis.org](https://teddavis.org)

## Abstract
In this workshop we'll explore HY5LIVE, a [brand new!] experimental live-coding editor, that bridges the gap between [hydra-synth](https://github.com/hydra-synth/hydra-synth) and [p5.js](https://p5js.org/), enabling global-mode code in both frameworks, for the best of both worlds! (p5 » hydra || hydra » p5)


## Links
- [HY5LIVE](https://hy5live.teddavis.org) - login details during workshop
- [p5.js teaching material](https://dusie.ch/topics/p5js) - intro to using p5.js
- [hydra teaching material](https://dusie.ch/topics/p5js/?c=hydra) - intro to hydra + links to many resources

## Code of Conduct
In this workshop, we'll follow p5.js' very thoughtful [CoC](https://github.com/processing/p5.js/blob/main/CODE_OF_CONDUCT.md).  
Please give it a read, keeping it in mind as we form a community.

## RTFM
Nobody reads the readme.. but it's *fun* to put it together making sure everything possible within a tool is documented. With that said, here's a very rough, in-progress, copy of the readme (which you find within the tool under 'About') – nevertheless for referencing in a separate tab while working:

### HY5LIVE
v 0.0.4  
cc [teddavis.org](http://teddavis.org) – 2023  
hydra 🙏 p5.js live-coding environment!

[HY5LIVE](https://hy5live.teddavis.org) bridges the gap between [hydra-synth](https://github.com/hydra-synth/hydra-synth) and [p5.js](https://p5js.org), enabling global-mode code in both frameworks, for the best of both worlds! (`p5` » `hydra` || `hydra` » `p5`)  

This is an experimental editor, compiling on every keypress for instant feedback, focused on combining these two powerful frameworks with small tricks to help them communicate. For more in-depth live-coding in either framework, see:  
- [hydra editor](https://hydra.ojack.xyz), official hydra editor by Olivia Jack  
- [P5LIVE](https://p5live.org/), p5.js collaborative live-coding vj environment!

### SHORTCUTS

|  |  |
|--:|:--|
|`CTRL` + `ENTER`|compile block|
|`CTRL` + `SHIFT` + `ENTER`|compile all|
|`CTRL` + `ALT` + `ENTER`|compile selection|
|`CTRL` + `E`|toggle editor|
|`CTRL` + `M`|toggle menu|
|`CTRL` + `N`|new sketch|
|`CTRL` + `SHIFT` + `T`|tidy code|
|`CTRL` + `SHIFT` + `S`|save snapshot (.js + .png)|
|`META` + `ALT` + `UP/DOWN`|duplicate lines up/down|
|`ALT` + `UP/DOWN`|shift lines up/down|

### COMPILING
Blocks of code are defined in HY5LIVE by any lines immediately touching, and are separated by blank lines before and after them, ie:  
  
```js
osc().out()

osc()
	.modulate(voronoi())
	.out()
```
By default, HY5LIVE tries to compile the current block being edited, so in the above example, typing on the 1st block, would show those visuals on default `o0`, whereas if one then made edits on block 2, it would overwrite `o0` and display its visuals. 

HY5LIVE automatically tries to compile your code while you're typing with lots of error catching to make that possible. You can always force the current block (where text cursor is) to recompile, or if/when necessary, recompile the whole iframe + sketch with `CTRL + SHIFT + ENTER`. One can also recompile a selectio of code with `CTRL + ALT + ENTER`. Therefore, be sure to separate hydra `init` functions like `init.screen()` with separate lines to try and prevent it from re-displaying dialog box unnecessarily.

### FUNCTIONS
Set of unique HY5LIVE functions for bridging hydra + p5. 
#### P5 // p5.js specific
**P5.init()<br>P5.init( [ {canvas:drawingContext, src:s0} ] )**  
set p5.js canvas/layer as a hydra source. If no values are set, takes main p5.js canvas and sets `s0` src of hydra. Use `src(s0).out()` to view it in hydra. Optionally pass it a p5.js layer/graphic and assign to a different src. 

**P5.zIndex()<br>P5.zIndex( [index] )**  
set css `z-index` of p5.js canvas. If no param given, set to `-1` to place p5.js behind hydra.

**P5.hide()**  
hide p5.js canvas.

**P5.show()**  
show p5.js canvas.


#### H // hydra specific
**H.pixelDensity()<br>H.pixelDensity( [res] )**  
set pixelDensity of hydra canvas (similar to p5.js). Use for lo/hi-res. Default value: 2.0

**H.draw()<br>H.draw( [layer] )**  
draw hydra canvas to a p5 layer. If no value is given, creates layer called `h0`.

**H.drawOutput()<br>H.drawOutput( src, [layer] )**  
draw specific hydra output (o0, o1, o2, o3) to a p5 layer, *only* when `render()` is active (4x overview from hydra). If no value is given, creates layer called `h0`. Default output: `o0`

**H.drawOutputs()**  
draw all hydra outputs (o0, o1, o2, o3) to p5 layers, *only* when `render()` is active (4x overview from hydra). This creates 4x p5.js layers (h0, h1, h2, h3).

**H.drawCanvas(layer, canvas)**  
draw alt canvas to a p5 layer. *(go wild?!)*

**H.hide()**  
hide hydra canvas.

**H.show()**  
show hydra canvas.

**noize()**  
alias of hydra `noise()` to avoid p5 conflict.

### SNIPPETS
For the following snippets, type the phrase in bold, followed by the `TAB` key:  

**p5**  
Inserts necessary code for using p5.js + setting hydra's `s0` source to its canvas.

**p5detail**   
Inserts necessary code for using p5.js + overview of available functions specific for p5.

**p52hydra**  
Inserts complete code for using p5.js canvas within hydra.

**hydra2p5**  
Inserts complete code for using hydra canvas within p5.js.

**hydra2p5x4**  
Inserts complete code for using hydra's 4x outputs (o0,o1,o2,o3) within p5.js as 4x separate images/textures (h0,h1,h2,h3).

### SAVING
Sketches are **_ONLY_** saved in your browser's localStorage(!).  
Export all (<img class="svg" src="includes/icons/download.svg" height="12px">) sketches + settings regularly.  
Clearing browser history/data will likely erase all sketches + settings.

All changes live in the 'volatile' (yet saved on refresh) editing space. When saving a sketch, a 'read-only' version is saved for future reference and building upon again (contrary to P5LIVE, where every keypress auto-saves). Incase there's a bug or to make a change, either save a new sketch, or use the 'sketch editor' to modify one. 