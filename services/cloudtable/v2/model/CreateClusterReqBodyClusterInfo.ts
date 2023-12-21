import { CreateClusterInstanceBody } from './CreateClusterInstanceBody';


export class CreateClusterReqBodyClusterInfo {
    private 'feature_map'?: { [key: string]: string; };
    private 'cluster_instance_info'?: Array<CreateClusterInstanceBody>;
    public constructor(featureMap?: { [key: string]: string; }, clusterInstanceInfo?: Array<CreateClusterInstanceBody>) { 
        this['feature_map'] = featureMap;
        this['cluster_instance_info'] = clusterInstanceInfo;
    }
    public withFeatureMap(featureMap: { [key: string]: string; }): CreateClusterReqBodyClusterInfo {
        this['feature_map'] = featureMap;
        return this;
    }
    public set featureMap(featureMap: { [key: string]: string; }  | undefined) {
        this['feature_map'] = featureMap;
    }
    public get featureMap(): { [key: string]: string; } | undefined {
        return this['feature_map'];
    }
    public withClusterInstanceInfo(clusterInstanceInfo: Array<CreateClusterInstanceBody>): CreateClusterReqBodyClusterInfo {
        this['cluster_instance_info'] = clusterInstanceInfo;
        return this;
    }
    public set clusterInstanceInfo(clusterInstanceInfo: Array<CreateClusterInstanceBody>  | undefined) {
        this['cluster_instance_info'] = clusterInstanceInfo;
    }
    public get clusterInstanceInfo(): Array<CreateClusterInstanceBody> | undefined {
        return this['cluster_instance_info'];
    }
}