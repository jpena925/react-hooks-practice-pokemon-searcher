import React, { useState } from "react";
import { Form } from "semantic-ui-react";

function PokemonForm({handleAddPokemon}) {
	const [formData, setFormData] = useState({
		name: "",
		hp: 0,
		frontUrl: "",
		backUrl: "",
	});

  const pokeObj = {
    name: formData.name,
    hp: formData.hp,
    sprites: {
      front: formData.frontUrl,
      back: formData.backUrl
    }
  }

	function handleChange(e) {
		let changeCategory = e.target.name;
		let changeValue = e.target.value;

		setFormData((formData) => ({ ...formData, [changeCategory]: changeValue }));
	}



	return (
		<div>
			<h3>Add a Pokemon!</h3>
			<Form
				onSubmit={() => handleAddPokemon(pokeObj)}>
				<Form.Group widths="equal">
					<Form.Input
						fluid
						label="Name"
						placeholder="Name"
						name="name"
						onChange={handleChange}
            value={formData.name}
					/>
					<Form.Input
						fluid
						label="hp"
						placeholder="hp"
						name="hp"
						onChange={handleChange}
            value={formData.hp}
					/>
					<Form.Input
						fluid
						label="Front Image URL"
						placeholder="url"
						name="frontUrl"
						onChange={handleChange}
            value={formData.frontUrl}
					/>
					<Form.Input
						fluid
						label="Back Image URL"
						placeholder="url"
						name="backUrl"
						onChange={handleChange}
            value={formData.backUrl}
					/>
				</Form.Group>
				<Form.Button>Submit</Form.Button>
			</Form>
		</div>
	);
}

export default PokemonForm;
