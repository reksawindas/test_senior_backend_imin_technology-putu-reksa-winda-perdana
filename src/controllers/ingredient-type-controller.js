const db = require("../config/database");

exports.createIngredientType = async (req, res) => {
    const { type_name, assign_ingredient } = req.body;
    const { rows } = await db.query(
        "INSERT INTO tb_ingredient_type ( type_name, assign_ingredient ) VALUES ($1, $2)",
        [type_name, assign_ingredient]
    );
    res.status(200).send({
        message: "Ingredient Type added successfully!",
        response: {
            data: { type_name, assign_ingredient }
        },
    });
};

exports.listAllIngredientType = async (req, res) => {
    const response = await db.query(`   
                                        select a.type_name, b.name_assign 
                                        from tb_ingredient_type a
                                        join tb_assign_ingredient b on b.id = a.assign_ingredient ORDER BY a.type_name ASC`
                                    );
    res.status(200).send(response.rows);
};

exports.findIngredientTypeById = async (req, res) => {
    const measurmentId = parseInt(req.params.id);
    const response = await db.query(`select a.type_name, b.name_assign 
                                        from tb_ingredient_type a
                                        join tb_assign_ingredient b on b.id = a.assign_ingredient WHERE a.id = $1`, [measurmentId]);
    res.status(200).send(response.rows);
}


exports.updateIngredientTypeById = async (req, res) => {
    const IngredientTypeId = parseInt(req.params.id);
    const { type_name, assign_ingredient } = req.body;

    const response = await db.query(
        "UPDATE tb_ingredient_type SET type_name = $1, assign_ingredient = $2 WHERE id = $3",
        [type_name, assign_ingredient, IngredientTypeId]
    );

    res.status(200).send({ message: "Ingredient Type Updated Successfully!" });
};

exports.deleteIngredientTypeById = async (req, res) => {
    const IngredientTypeId = parseInt(req.params.id);
    await db.query('DELETE FROM tb_ingredient_type WHERE id = $1', [
        IngredientTypeId
    ]);
  
    res.status(200).send({ message: 'Ingredient Type deleted successfully!', IngredientTypeId });
};