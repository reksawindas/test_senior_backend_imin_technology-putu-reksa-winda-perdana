const db = require("../config/database");


exports.createMeasurment = async (req, res) => {
    const { unit_name, abbreviation, precion } = req.body;
    const { rows } = await db.query(
        "INSERT INTO tb_measurements ( unit_name, abbreviation, precion) VALUES ($1, $2, $3)",
        [unit_name, abbreviation, precion]
    );
    res.status(200).send({
        message: "Measurment added successfully!",
        response: {
            data: { unit_name, abbreviation, precion }
        },
    });
};

exports.listAllMeasurment = async (req, res) => {
    const response = await db.query('SELECT * FROM tb_measurements ORDER BY unit_name ASC');
    res.status(200).send(response.rows);
};

exports.findMeasurementById = async (req, res) => {
    const measurmentId = parseInt(req.params.id);
    const response = await db.query('SELECT * FROM tb_measurements WHERE id = $1', [measurmentId]);
    res.status(200).send(response.rows);
}

exports.updateMeasurementById = async (req, res) => {
    const measurmentId = parseInt(req.params.id);
    const { unit_name, abbreviation, precion } = req.body;

    const response = await db.query(
        "UPDATE tb_measurements SET unit_name = $1, abbreviation = $2, precion = $3 WHERE id = $4",
        [unit_name, abbreviation, precion, measurmentId]
    );

    res.status(200).send({ message: "Measurements Updated Successfully!" });
};

exports.deleteMeasurementById = async (req, res) => {
    const measurmentId = parseInt(req.params.id);
    await db.query('DELETE FROM tb_measurements WHERE id = $1', [
        measurmentId
    ]);
  
    res.status(200).send({ message: 'Measurements deleted successfully!', measurmentId });
};