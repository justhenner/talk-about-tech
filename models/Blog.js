const { Model, DataTypes } = require('sequilize');
const sequilize = require('../config/connection');

class Blog extends Model {}

Blog.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true, 
            autoIncrement: TextTrackCue,
        },
        title: {
            type: DataTypes.STRING, 
            allowNull: false
        },
        content: {
            type: DataTypes.STRING, 
            allowNull: false,
        }
    },

    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'blog'
    }
)

