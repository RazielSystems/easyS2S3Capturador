use administracionUsuarios

db.createUser({
    "user": "admonP2",
    "pwd": "raziel",
    "roles": [
        {
            "role": "readWrite",
            "db": "administracionUsuarios"
        }
    ]
});

db.getUsers()

db.grantRolesToUser( "admonP2", [ { role: "readWrite", db: "S2" } ]);
db.grantRolesToUser( "admonP2", [ { role: "readWrite", db: "S3_Servidores" } ]);
db.grantRolesToUser( "admonP2", [ { role: "readWrite", db: "S3_Particulares" } ]);

db.usuarios.insertOne({
    "nombre": "Administrador",
    "apellidoUno": "Del",
    "apellidoDos": "Sistema",
    "cargo": "Administrador",
    "correoElectronico": "admin@gmail.com",
    "telefono": "0000000000",
    "extension": "626262",
    "usuario": "adminsystem",
    "constrasena": "$JXz5yzL",
    "sistemas": [
        "S2",
        "S3S",
        "S3P"
    ],
    "proveedorDatos": "iodsioadsijsdaijosda",
    "fechaAlta": "2021-01-15T15:28:28-06:00",
    "vigenciaContrasena": "2099-04-15T15:28:28-05:00",
    "estatus": true,
    "rol": "1",
    "contrasenaNueva": false
})

db.clients.insert([{
    clientId: 'pdn',
    clientSecret: 'Hs_x93jY',
    grants: []
}
])

db.usuarios.find().pretty()

db.clients.find().pretty()
