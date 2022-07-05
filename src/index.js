wp.blocks.registerBlockType("ourplugin/let-dive-to-javascript", {
  title: "let dive to javascript",
  icon: "smiley",
  category: "common",
  attributes: {
    skyColor: { type: "string" },
    butttonColor: { type: "string" },
  },
  edit: function (props) {
    function handleSkycolor(event) {
      props.setAttributes({ skyColor: event.target.value });
    }
    function handleGrasscolor(event) {
      props.setAttributes({ butttonColor: event.target.value });
    }
    return (
      <div>
        <input
          type="text"
          value={props.attributes.skyColor}
          placeholder="grass"
          onChange={handleSkycolor}
        />
        <input
          type="text"
          placeholder="next"
          value={props.attributes.butttonColor}
          onChange={handleGrasscolor}
        />
        <h1>{props.attributes.butttonColor}</h1>
        <h1 style={{ background: "Orange" }}>
          {props.attributes.butttonColor}
        </h1>
        <h1 style={{ background: "DodgerBlue" }}>
          {props.attributes.butttonColor}
        </h1>
        <h1 style={{ background: "green" }}>{props.attributes.butttonColor}</h1>
      </div>
    );
  },

  save: function (props) {
    return (
      <div>
        <h1>{props.attributes.butttonColor}</h1>
        <h1 style={{ background: "Orange" }}>
          {props.attributes.butttonColor}
        </h1>
        <h1 style={{ background: "DodgerBlue" }}>
          {props.attributes.butttonColor}
        </h1>
        <h1 style={{ background: "green" }}>{props.attributes.butttonColor}</h1>
      </div>
    );
  },
});
