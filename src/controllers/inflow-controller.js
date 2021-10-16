const db = require("../config/database");

exports.createInflow = async (req, res) => {
    const { id_ingredient, id_reason, price, quantity, additional_details, created_date } = req.body;
    const { rows } = await db.query(
        "INSERT INTO tb_inflow ( id_ingredient, id_reason, price, quantity, additional_details, created_date ) VALUES ($1, $2, $3, $4, $5, $6)",
        [id_ingredient, id_reason, price, quantity, additional_details, created_date]
    );
    res.status(200).send({
        message: "Inflow added successfully!",
        response: {
            data: { id_ingredient, id_reason, price, quantity, additional_details, created_date }
        },
    });
};

exports.listAllInflow = async (req, res) => {
    const response = await db.query(`   
                                        select a.created_date ,b.ingredient_name, c.name_reason, a.price, a.quantity, a.additional_details 
                                        from tb_inflow a
                                        join tb_ingredient b on b.id = a.id_ingredient 
                                        join tb_reason c on c.id = a.id_reason 

                                    `);
    res.status(200).send(response.rows);
};

exports.deleteInflowById = async (req, res) => {
    const inflowId = parseInt(req.params.id);
    await db.query('DELETE FROM tb_inflow WHERE id = $1', [
        inflowId
    ]);
  
    res.status(200).send({ message: 'Inflow deleted successfully!', inflowId });
};