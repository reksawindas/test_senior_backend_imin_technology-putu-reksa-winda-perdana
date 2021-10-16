const db = require("../config/database");

exports.createIngredientState = async (req, res) => {
    const { state_name, assign_ingredient } = req.body;
    const { rows } = await db.query(
        "INSERT INTO tb_ingredient_state ( state_name, assign_ingredient ) VALUES ($1, $2)",
        [state_name, assign_ingredient]
    );
    res.status(200).send({
        message: "Ingredient State added successfully!",
        response: {
            data: { state_name, assign_ingredient }
        },
    });
};

exports.listAllIngredientState = async (req, res) => {
    const response = await db.query(`   
                                        select a.state_name, b.name_assign 
                                        from tb_ingredient_state a
                                        join tb_assign_ingredient b on b.id = a.assign_ingredient ORDER BY a.state_name ASC`
                                    );
    res.status(200).send(response.rows);
};

exports.findIngredientStateById = async (req, res) => {
    const measurmentId = parseInt(req.params.id);
    const response = await db.query(`select a.state_name, b.name_assign 
                                        from tb_ingredient_state a
                                        join tb_assign_ingredient b on b.id = a.assign_ingredient WHERE a.id = $1`, [measurmentId]);
    res.status(200).send(response.rows);
}


exports.updateIngredientStateById = async (req, res) => {
    const ingredientStateId = parseInt(req.params.id);
    const { state_name, assign_ingredient } = req.body;

    const response = await db.query(
        "UPDATE tb_ingredient_state SET state_name = $1, assign_ingredient = $2 WHERE id = $3",
        [state_name, assign_ingredient, ingredientStateId]
    );

    res.status(200).send({ message: "Ingredient State Updated Successfully!" });
};

exports.deleteIngredientStateById = async (req, res) => {
    const ingredientStateId = parseInt(req.params.id);
    await db.query('DELETE FROM tb_ingredient_state WHERE id = $1', [
        ingredientStateId
    ]);
  
    res.status(200).send({ message: 'Ingredient State deleted successfully!', ingredientStateId });
};