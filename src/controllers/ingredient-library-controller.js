const db = require("../config/database");

exports.createIngredientLibrary = async (req, res) => {
    const { ingredient_name, ingredient_state, measurement_unit, ingredient_type } = req.body;
    const { rows } = await db.query(
        "INSERT INTO tb_ingredient ( ingredient_name, ingredient_state, measurement_unit, ingredient_type ) VALUES ($1, $2, $3, $4)",
        [ingredient_name, ingredient_state, measurement_unit, ingredient_type]
    );
    res.status(200).send({
        message: "Ingredient Type added successfully!",
        response: {
            data: { ingredient_name, ingredient_state, measurement_unit, ingredient_type }
        },
    });
};

exports.listAllIngredientLibrary = async (req, res) => {
    const response = await db.query(`   
                                        select a.ingredient_name, CONCAT (b.unit_name, ' ', b.abbreviation ,' ') AS measurement_unit, c.state_name as ingredient_state, d.type_name as ingredient_type, SUM(COALESCE(e.quantity, 0)) as current_stok 
                                        from tb_ingredient a
                                        join tb_measurements b on b.id = a.measurement_unit 
                                        join tb_ingredient_state c on c.id = a.ingredient_state 
                                        join tb_ingredient_type d on d.id = a.ingredient_type 
                                        left join tb_inflow e on e.id_ingredient = a.id
                                        group by a.ingredient_name, b.unit_name, b.abbreviation, c.state_name, d.type_name
                                    `);
    res.status(200).send(response.rows);
};

exports.updateIngredientLibraryById = async (req, res) => {
    const IngredientLibraryId = parseInt(req.params.id);
    const { ingredient_name, state_name, unit_name, type_name } = req.body;

    const response = await db.query(
        "UPDATE tb_ingredient SET ingredient_name = $1, ingredient_state = $2, measurement_unit = $3, ingredient_type = $4 WHERE id = $5",
        [ingredient_name, state_name, unit_name, type_name, IngredientLibraryId]
    );

    res.status(200).send({ message: "Ingredient Librarty Updated Successfully!" });
};

exports.deleteIngredientLibraryById = async (req, res) => {
    const IngredientLibraryId = parseInt(req.params.id);
    await db.query('DELETE FROM tb_ingredient WHERE id = $1', [
        IngredientLibraryId
    ]);
  
    res.status(200).send({ message: 'Ingredient Library deleted successfully!', IngredientLibraryId });
};