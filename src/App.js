import React from "react";

export default class App extends React.Component {
  state = {
    instruments: [
      "flute",
      "piano",
      "guitar",
      "cello",
      "trumpet",
      "drums",
      "horn",
      "harmonica",
      "maraka",
      "banjo",
      "ukulele",
      "clarinet",
      "violin",
      "keyboard",
      "clarinet"
    ],
    result: []
  };

  Search = (event) => {
    let { instruments } = this.state;
    const displayInstruments = instruments.filter((item) => {
      if (item.toLowerCase().includes(event.target.value.toLowerCase())) {
        return;
      }
    });

    this.setState({
      result: displayInstruments
    });
  };

  render() {
    return (
      <div>
        <h1>Loja de instrumentos</h1>
        <input
          type="text"
          placeholder="pesquise aqui seu instrumento"
          onChange={this.Search}
        />
        {this.state.result.map((item) => (
          <h2>{item}</h2>
        ))}
      </div>
    );
  }
}
