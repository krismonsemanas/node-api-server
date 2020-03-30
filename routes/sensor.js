const sensorRoutes = (app, fs) => {
    const path = './data/data.json';
     // helper methods
     const readFile = (callback, returnJson = false, filePath = path, encoding = 'utf8') => {
        fs.readFile(filePath, encoding, (err, data) => {
            if (err) {
                throw err;
            }

            callback(returnJson ? JSON.parse(data) : data);
        });
    };

    const writeFile = (fileData, callback, filePath = path, encoding = 'utf8') => {

        fs.writeFile(filePath, fileData, encoding, (err) => {
            if (err) {
                throw err;
            }

            callback();
        });
    };
    // gat all data from ./data/data.json
    app.get('/sensors',(req, res) => {
        fs.readFile(path, 'utf8', (err, data) => {
            if(err) {
                throw err;
            }
            res.send(JSON.parse(data))
        });
    });

    // retrieve the latest data by type
    app.get('/sensors/:type', (req, res) => {
        const rows = [];
        var idx = 0;
        readFile(sensors => {
            for (let i = 0; i < Object.keys(sensors).length; i++) {
                if(sensors[i].type.toLowerCase() == req.params.type.toLowerCase()){
                    rows.push(sensors[i]);
                }
            }
            res.send(rows[rows.length - 1]);
        }, true);
    });

    // post new sensor data
    app.post('/sensors' ,(req, res) => {
        readFile(sensors => {
            let sensor = {
                type: req.body.type,
                id: Object.keys(sensors).length + 1,
                value: req.body.value
            }
            sensors.push(sensor);
            writeFile(JSON.stringify(sensors, null, 2), () => {
                res.status(200).send(`Data sensor ${req.body.type} telah ditambahkan`);
            });
        }, true);
    });
}

module.exports = sensorRoutes;