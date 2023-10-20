import { Sequelize } from 'sequelize'

const db = new Sequelize('postgres://rest_api_node_typescript_user:roTyfMlfilgywyQsxF7fqfR6AWV9CIiS@dpg-ckorioc1tcps73edphog-a.oregon-postgres.render.com/rest_api_node_typescript?ssl=true')

export default db