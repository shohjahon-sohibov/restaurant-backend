const { Sequelize, DataTypes } = require('sequelize')

const user = 'postgres'
const host = 'localhost'
const database = 'base'
const password = 1
const port = 5432

const sequelize = new Sequelize(database, user, password, {
    host,
    port,
    dialect: 'postgres',
    logging: false
  })

const Categories = sequelize.define('categories', {
    name: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate: {
            min: 3,
            max: 64
        }
    }
})

const Restaurants = sequelize.define('restaurants', {
    name: {
        type: DataTypes.STRING(64),
        allowNull: false,
        validate: {
            min: 3
        }
    }
})

const Branches = sequelize.define('branches', {
    name: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate: {
            min: 3,
            max: 64
        }
    }
})

const Menu = sequelize.define('menu', {
  name: {
      type: DataTypes.TEXT,
      allowNull: false,
      validate: {
          min: 1
      }
  } ,
  price: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
          min: 1000
      }
  } 
});

const Orders = sequelize.define('order', {
    name: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate: {
            min: 3
        }
    },
    price: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
            min: 1000
        }
    } ,
    location: {
        type: DataTypes.TEXT,
        allowNull: false
    }
  });

Categories.hasMany(Restaurants)
Restaurants.belongsTo(Categories)

Restaurants.hasMany(Branches)
Branches.belongsTo(Restaurants)


Branches.hasMany(Menu)
Menu.belongsTo(Branches)

Branches.hasMany(Orders)
Orders.belongsTo(Branches)

module.exports = {
    Categories,
    Restaurants,
    Branches,
    Menu,
    Orders
}
