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
/**
 * 
 * @export
 * @interface ModelScanResultsCommon
 */
export interface ModelScanResultsCommon {
    /**
     * 
     * @type {string}
     * @memberof ModelScanResultsCommon
     */
    cloud_account_id: string;
    /**
     * 
     * @type {number}
     * @memberof ModelScanResultsCommon
     */
    created_at: number;
    /**
     * 
     * @type {string}
     * @memberof ModelScanResultsCommon
     */
    docker_container_name: string;
    /**
     * 
     * @type {string}
     * @memberof ModelScanResultsCommon
     */
    docker_image_name: string;
    /**
     * 
     * @type {string}
     * @memberof ModelScanResultsCommon
     */
    host_name: string;
    /**
     * 
     * @type {string}
     * @memberof ModelScanResultsCommon
     */
    kubernetes_cluster_name: string;
    /**
     * 
     * @type {string}
     * @memberof ModelScanResultsCommon
     */
    node_id: string;
    /**
     * 
     * @type {string}
     * @memberof ModelScanResultsCommon
     */
    node_name: string;
    /**
     * 
     * @type {string}
     * @memberof ModelScanResultsCommon
     */
    node_type: string;
    /**
     * 
     * @type {string}
     * @memberof ModelScanResultsCommon
     */
    scan_id: string;
    /**
     * 
     * @type {number}
     * @memberof ModelScanResultsCommon
     */
    updated_at: number;
}

/**
 * Check if a given object implements the ModelScanResultsCommon interface.
 */
export function instanceOfModelScanResultsCommon(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "cloud_account_id" in value;
    isInstance = isInstance && "created_at" in value;
    isInstance = isInstance && "docker_container_name" in value;
    isInstance = isInstance && "docker_image_name" in value;
    isInstance = isInstance && "host_name" in value;
    isInstance = isInstance && "kubernetes_cluster_name" in value;
    isInstance = isInstance && "node_id" in value;
    isInstance = isInstance && "node_name" in value;
    isInstance = isInstance && "node_type" in value;
    isInstance = isInstance && "scan_id" in value;
    isInstance = isInstance && "updated_at" in value;

    return isInstance;
}

export function ModelScanResultsCommonFromJSON(json: any): ModelScanResultsCommon {
    return ModelScanResultsCommonFromJSONTyped(json, false);
}

export function ModelScanResultsCommonFromJSONTyped(json: any, ignoreDiscriminator: boolean): ModelScanResultsCommon {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'cloud_account_id': json['cloud_account_id'],
        'created_at': json['created_at'],
        'docker_container_name': json['docker_container_name'],
        'docker_image_name': json['docker_image_name'],
        'host_name': json['host_name'],
        'kubernetes_cluster_name': json['kubernetes_cluster_name'],
        'node_id': json['node_id'],
        'node_name': json['node_name'],
        'node_type': json['node_type'],
        'scan_id': json['scan_id'],
        'updated_at': json['updated_at'],
    };
}

export function ModelScanResultsCommonToJSON(value?: ModelScanResultsCommon | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'cloud_account_id': value.cloud_account_id,
        'created_at': value.created_at,
        'docker_container_name': value.docker_container_name,
        'docker_image_name': value.docker_image_name,
        'host_name': value.host_name,
        'kubernetes_cluster_name': value.kubernetes_cluster_name,
        'node_id': value.node_id,
        'node_name': value.node_name,
        'node_type': value.node_type,
        'scan_id': value.scan_id,
        'updated_at': value.updated_at,
    };
}

