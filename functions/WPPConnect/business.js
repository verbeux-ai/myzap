const Sessions = require("../../controllers/SessionsController");
const logger = require("../../util/logger");

module.exports = class Business {
    static async getAllLabels(req, res) {

        try {

            let data = await Sessions.getClient(req.body.session)
            let response = await data.client.getAllLabels()

            res.status(200).json({
                "result": 200,
                "token": response
            })

        } catch (error) {

            logger.error(`Error on getClientTokenBrowser: ${error?.message}`)

            res.status(400).json({
                response: false,
                data: error?.message
            });
        }

    }

    static async addNewLabel(req, res) {

        try {
            let data = await Sessions.getClient(req.body.session)
            let response = await data.client.addNewLabel(req.body.name)

            res.status(200).json({
                "result": 200,
                "token": response
            })

        } catch (error) {

            logger.error(`Error on getClientTokenBrowser: ${error?.message}`)

            res.status(400).json({
                response: false,
                data: error?.message
            });
        }

    }

    static async addOrRemoveLabels(req, res) {

        try {
            let data = await Sessions.getClient(req.body.session)
            let response = await data.client.addOrRemoveLabels([req.body.number+'@c.us'], req.body.actions)

            res.status(200).json({
                "result": 200,
                "token": response
            })

        } catch (error) {

            logger.error(`Error on getClientTokenBrowser: ${error?.message}`)

            res.status(400).json({
                response: false,
                data: error?.message
            });
        }

    }

    static async addProduct(req, res) {

        try {
            let data = await Sessions.getClient(req.body.session)
            await data.client.createProduct(req.body)

            res.status(200).json({
                "result": 200,
            })

        } catch (error) {

            logger.error(`Error on add product: ${error?.message}`)

            res.status(400).json({
                response: false,
                data: error?.message
            });
        }

    }

    static async deleteProduct(req, res) {

        try {
            let data = await Sessions.getClient(req.body.session)
            await data.client.delProducts(req.params.id)

            res.status(200).json({
                "result": 200,
            })

        } catch (error) {

            logger.error(`Error on del product: ${error?.message}`)

            res.status(400).json({
                response: false,
                data: error?.message
            });
        }

    }

    static async updateProduct(req, res) {
        try {
            let data = await Sessions.getClient(req.body.session)
            await data.client.updateProduct(req.params.id, req.body)

            res.status(200).json({
                "result": 200,
            })

        } catch (error) {

            logger.error(`Error on del product: ${error?.message}`)

            res.status(400).json({
                response: false,
                data: error?.message
            });
        }
    }

    static async getProducts(req, res) {
        try {
            let data = await Sessions.getClient(req.body.session)
            await data.client.getProducts(req.body.number+'@c.us', req?.query?.quantity)

            res.status(200).json({
                "result": 200,
            })

        } catch (error) {

            logger.error(`Error on del product: ${error?.message}`)

            res.status(400).json({
                response: false,
                data: error?.message
            });
        }
    }

}
