
'use strict';

module.exports = {
	up: (queryInterface, Sequelize) => {
		return queryInterface.createTable('Leads', {
			id: {
				type: Sequelize.UUID,
				defaultValue: Sequelize.UUIDV4,
				allowNull: false,
				primaryKey: true
			},
			createdAt: {
				allowNull: false,
				type: Sequelize.DATE
			},
			updatedAt: {
				allowNull: false,
				type: Sequelize.DATE
			},
			email: {
				type: Sequelize.STRING,
				allowNull: false
			},
		})
		
	},
	down: (queryInterface, Sequelize) => {
		return queryInterface.dropTable('Leads');
	}
};