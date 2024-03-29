/**
 * trieve-server
 * Trieve REST API OpenAPI Documentation
 *
 * OpenAPI spec version: 0.3.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { Dataset } from '../models/Dataset';
import { OrganizationWithSubAndPlan } from '../models/OrganizationWithSubAndPlan';
import { HttpFile } from '../http/http';

export class DatasetAndOrgWithSubAndPlan {
    'dataset': Dataset;
    'organization': OrganizationWithSubAndPlan;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "dataset",
            "baseName": "dataset",
            "type": "Dataset",
            "format": ""
        },
        {
            "name": "organization",
            "baseName": "organization",
            "type": "OrganizationWithSubAndPlan",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return DatasetAndOrgWithSubAndPlan.attributeTypeMap;
    }

    public constructor() {
    }
}

