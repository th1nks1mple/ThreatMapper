/* tslint:disable */
/* eslint-disable */
/**
 * Deepfence ThreatMapper
 * Deepfence Runtime API provides programmatic control over Deepfence microservice securing your container, kubernetes and cloud deployments. The API abstracts away underlying infrastructure details like cloud provider,  container distros, container orchestrator and type of deployment. This is one uniform API to manage and control security alerts, policies and response to alerts for microservices running anywhere i.e. managed pure greenfield container deployments or a mix of containers, VMs and serverless paradigms like AWS Fargate.
 *
 * The version of the OpenAPI document: 2.2.0
 * Contact: community@deepfence.io
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { SearchResultGroup } from './SearchResultGroup';
import {
    SearchResultGroupFromJSON,
    SearchResultGroupFromJSONTyped,
    SearchResultGroupToJSON,
} from './SearchResultGroup';

/**
 * 
 * @export
 * @interface SearchResultGroupResp
 */
export interface SearchResultGroupResp {
    /**
     * 
     * @type {Array<SearchResultGroup>}
     * @memberof SearchResultGroupResp
     */
    groups?: Array<SearchResultGroup> | null;
}

/**
 * Check if a given object implements the SearchResultGroupResp interface.
 */
export function instanceOfSearchResultGroupResp(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function SearchResultGroupRespFromJSON(json: any): SearchResultGroupResp {
    return SearchResultGroupRespFromJSONTyped(json, false);
}

export function SearchResultGroupRespFromJSONTyped(json: any, ignoreDiscriminator: boolean): SearchResultGroupResp {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'groups': !exists(json, 'groups') ? undefined : (json['groups'] === null ? null : (json['groups'] as Array<any>).map(SearchResultGroupFromJSON)),
    };
}

export function SearchResultGroupRespToJSON(value?: SearchResultGroupResp | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'groups': value.groups === undefined ? undefined : (value.groups === null ? null : (value.groups as Array<any>).map(SearchResultGroupToJSON)),
    };
}

