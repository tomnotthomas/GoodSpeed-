"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.main = void 0;
const dotenv = require('dotenv').config({ path: __dirname + '/../../../.env' });
function main(instanceResource, project, zone) {
    return __awaiter(this, void 0, void 0, function* () {
        // Imports the Compute library
        console.log("main function in cloud-vm-creator called with", { instanceResource, project, zone });
        const { InstancesClient } = require('@google-cloud/compute').v1;
        // Instantiates a client
        const computeClient = new InstancesClient();
        function callInsert() {
            return __awaiter(this, void 0, void 0, function* () {
                // Construct request
                const request = {
                    instanceResource,
                    project,
                    zone,
                };
                // Run request
                const response = yield computeClient.insert(request);
                console.log(response);
            });
        }
        yield callInsert();
        process.on('unhandledRejection', err => {
            if (err instanceof Error) {
                console.error(err.message);
            }
            else {
                console.error('An unknown error occurred');
            }
        });
        return 'I, THE CLOUD VM CREATOR WAS HIIIIT';
        // [END compute_v1_generated_Instances_Insert_async]
    });
}
exports.main = main;
/**
 *  Project ID for this request.
 */
/**
 *  An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported ( 00000000-0000-0000-0000-000000000000).
 */
// const requestId = 'abc123'
/**
 *  Specifies instance template to create the instance. This field is optional. It can be a full or partial URL. For example, the following are all valid URLs to an instance template: - https://www.googleapis.com/compute/v1/projects/project /global/instanceTemplates/instanceTemplate - projects/project/global/instanceTemplates/instanceTemplate - global/instanceTemplates/instanceTemplate
 */
// const sourceInstanceTemplate = 'abc123'
/**
 *  Specifies the machine image to use to create the instance. This field is optional. It can be a full or partial URL. For example, the following are all valid URLs to a machine image: - https://www.googleapis.com/compute/v1/projects/project/global/global /machineImages/machineImage - projects/project/global/global/machineImages/machineImage - global/machineImages/machineImage
 */
// const sourceMachineImage = 'abc123'
/**
 *  The name of the zone for this request.
 */
