<script>
  function range(start, end) {
    const result = [];
    for (let i = start; i < end; i++) {
      result.push(i);
    }

    return result;
  }

  function displayText(code) {
    if (code === "") {
      return "\n";
    }

    return code;
  }

  export let code = "";
  export let width = "100%";
  export let height = "auto";

  $: codeLines = code.split("\n") || [];
  $: lineCount = codeLines.length;
  $: lineNumbersWidth = `${lineCount}`.length + 0.5;
</script>

<style>
  pre {
    padding: 0;
    margin: 0;
  }
  .row {
    display: flex;
  }
  .col-initial {
    flex: initial;
  }

  .col {
    flex: 1;
  }

  .code {
    font-family: Courier, "Courier New", monospace;
    color: rgb(220, 220, 170);
    height: 1.25em;
  }

  .line-number {
    text-align: right;
    min-width: 3em;
    user-select: none;
    color: rgb(124, 124, 124);
  }

  .editor {
    /* position: relative; */
    overflow: auto;
    color: whitesmoke;
  }

  .line-numbers {
    position: absolute;
    background-color: rgb(30, 30, 30);
    top: 0;
    left: 0;
    padding-right: 1em;
  }

  .code-lines {
    position: absolute;
    top: 0;
    background-color: rgb(30, 30, 30);
    padding-left: 10px;
    padding-right: 10px;
    border-left: 1px solid #c9c9c9;
  }
</style>

<div class="editor" style="width: {width}; height: {height}">
  <div class="line-numbers">
    {#each range(1, lineCount + 1) as num}
      <div class="row">
        <div class="col-initial line-number code">{num}</div>
      </div>
    {/each}
  </div>

  <div class="code-lines" style="left: {lineNumbersWidth}em;">
    {#each codeLines as line}
      <div class="row">
        <div class="col">
          <pre class="code">{displayText(line)}</pre>
        </div>
      </div>
    {/each}
  </div>
</div>
