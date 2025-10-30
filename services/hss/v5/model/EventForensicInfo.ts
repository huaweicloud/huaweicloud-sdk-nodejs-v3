import { EventForensicInfoAbnormalLoginForensic } from './EventForensicInfoAbnormalLoginForensic';
import { EventForensicInfoAutoLaunchForensic } from './EventForensicInfoAutoLaunchForensic';
import { EventForensicInfoContainerForensic } from './EventForensicInfoContainerForensic';
import { EventForensicInfoGeoForensic } from './EventForensicInfoGeoForensic';
import { EventForensicInfoImageBlockForensic } from './EventForensicInfoImageBlockForensic';
import { EventForensicInfoMalwareForensic } from './EventForensicInfoMalwareForensic';
import { EventForensicInfoNetworkForensic } from './EventForensicInfoNetworkForensic';
import { EventForensicInfoRegistryForensic } from './EventForensicInfoRegistryForensic';
import { EventForensicInfoStackForensic } from './EventForensicInfoStackForensic';
import { EventForensicInfoUserForensic } from './EventForensicInfoUserForensic';
import { FileForensicInfo } from './FileForensicInfo';
import { HoneyForensicInfo } from './HoneyForensicInfo';
import { KernelForensicInfo } from './KernelForensicInfo';
import { ProcessForensicInfo } from './ProcessForensicInfo';


export class EventForensicInfo {
    private 'occur_time'?: number;
    private 'file_forensic_list'?: Array<FileForensicInfo>;
    private 'process_chain_forensic'?: Array<Array<ProcessForensicInfo>>;
    private 'network_forensic'?: EventForensicInfoNetworkForensic;
    private 'user_forensic'?: EventForensicInfoUserForensic;
    private 'registry_forensic'?: EventForensicInfoRegistryForensic;
    private 'abnormal_login_forensic'?: EventForensicInfoAbnormalLoginForensic;
    private 'container_forensic'?: EventForensicInfoContainerForensic;
    private 'malware_forensic'?: EventForensicInfoMalwareForensic;
    private 'auto_launch_forensic'?: EventForensicInfoAutoLaunchForensic;
    private 'kernel_forensic_list'?: Array<KernelForensicInfo>;
    private 'geo_forensic'?: EventForensicInfoGeoForensic;
    private 'stack_forensic'?: EventForensicInfoStackForensic;
    private 'image_block_forensic'?: EventForensicInfoImageBlockForensic;
    private 'honey_forensic'?: Array<HoneyForensicInfo>;
    public constructor() { 
    }
    public withOccurTime(occurTime: number): EventForensicInfo {
        this['occur_time'] = occurTime;
        return this;
    }
    public set occurTime(occurTime: number  | undefined) {
        this['occur_time'] = occurTime;
    }
    public get occurTime(): number | undefined {
        return this['occur_time'];
    }
    public withFileForensicList(fileForensicList: Array<FileForensicInfo>): EventForensicInfo {
        this['file_forensic_list'] = fileForensicList;
        return this;
    }
    public set fileForensicList(fileForensicList: Array<FileForensicInfo>  | undefined) {
        this['file_forensic_list'] = fileForensicList;
    }
    public get fileForensicList(): Array<FileForensicInfo> | undefined {
        return this['file_forensic_list'];
    }
    public withProcessChainForensic(processChainForensic: Array<Array<ProcessForensicInfo>>): EventForensicInfo {
        this['process_chain_forensic'] = processChainForensic;
        return this;
    }
    public set processChainForensic(processChainForensic: Array<Array<ProcessForensicInfo>>  | undefined) {
        this['process_chain_forensic'] = processChainForensic;
    }
    public get processChainForensic(): Array<Array<ProcessForensicInfo>> | undefined {
        return this['process_chain_forensic'];
    }
    public withNetworkForensic(networkForensic: EventForensicInfoNetworkForensic): EventForensicInfo {
        this['network_forensic'] = networkForensic;
        return this;
    }
    public set networkForensic(networkForensic: EventForensicInfoNetworkForensic  | undefined) {
        this['network_forensic'] = networkForensic;
    }
    public get networkForensic(): EventForensicInfoNetworkForensic | undefined {
        return this['network_forensic'];
    }
    public withUserForensic(userForensic: EventForensicInfoUserForensic): EventForensicInfo {
        this['user_forensic'] = userForensic;
        return this;
    }
    public set userForensic(userForensic: EventForensicInfoUserForensic  | undefined) {
        this['user_forensic'] = userForensic;
    }
    public get userForensic(): EventForensicInfoUserForensic | undefined {
        return this['user_forensic'];
    }
    public withRegistryForensic(registryForensic: EventForensicInfoRegistryForensic): EventForensicInfo {
        this['registry_forensic'] = registryForensic;
        return this;
    }
    public set registryForensic(registryForensic: EventForensicInfoRegistryForensic  | undefined) {
        this['registry_forensic'] = registryForensic;
    }
    public get registryForensic(): EventForensicInfoRegistryForensic | undefined {
        return this['registry_forensic'];
    }
    public withAbnormalLoginForensic(abnormalLoginForensic: EventForensicInfoAbnormalLoginForensic): EventForensicInfo {
        this['abnormal_login_forensic'] = abnormalLoginForensic;
        return this;
    }
    public set abnormalLoginForensic(abnormalLoginForensic: EventForensicInfoAbnormalLoginForensic  | undefined) {
        this['abnormal_login_forensic'] = abnormalLoginForensic;
    }
    public get abnormalLoginForensic(): EventForensicInfoAbnormalLoginForensic | undefined {
        return this['abnormal_login_forensic'];
    }
    public withContainerForensic(containerForensic: EventForensicInfoContainerForensic): EventForensicInfo {
        this['container_forensic'] = containerForensic;
        return this;
    }
    public set containerForensic(containerForensic: EventForensicInfoContainerForensic  | undefined) {
        this['container_forensic'] = containerForensic;
    }
    public get containerForensic(): EventForensicInfoContainerForensic | undefined {
        return this['container_forensic'];
    }
    public withMalwareForensic(malwareForensic: EventForensicInfoMalwareForensic): EventForensicInfo {
        this['malware_forensic'] = malwareForensic;
        return this;
    }
    public set malwareForensic(malwareForensic: EventForensicInfoMalwareForensic  | undefined) {
        this['malware_forensic'] = malwareForensic;
    }
    public get malwareForensic(): EventForensicInfoMalwareForensic | undefined {
        return this['malware_forensic'];
    }
    public withAutoLaunchForensic(autoLaunchForensic: EventForensicInfoAutoLaunchForensic): EventForensicInfo {
        this['auto_launch_forensic'] = autoLaunchForensic;
        return this;
    }
    public set autoLaunchForensic(autoLaunchForensic: EventForensicInfoAutoLaunchForensic  | undefined) {
        this['auto_launch_forensic'] = autoLaunchForensic;
    }
    public get autoLaunchForensic(): EventForensicInfoAutoLaunchForensic | undefined {
        return this['auto_launch_forensic'];
    }
    public withKernelForensicList(kernelForensicList: Array<KernelForensicInfo>): EventForensicInfo {
        this['kernel_forensic_list'] = kernelForensicList;
        return this;
    }
    public set kernelForensicList(kernelForensicList: Array<KernelForensicInfo>  | undefined) {
        this['kernel_forensic_list'] = kernelForensicList;
    }
    public get kernelForensicList(): Array<KernelForensicInfo> | undefined {
        return this['kernel_forensic_list'];
    }
    public withGeoForensic(geoForensic: EventForensicInfoGeoForensic): EventForensicInfo {
        this['geo_forensic'] = geoForensic;
        return this;
    }
    public set geoForensic(geoForensic: EventForensicInfoGeoForensic  | undefined) {
        this['geo_forensic'] = geoForensic;
    }
    public get geoForensic(): EventForensicInfoGeoForensic | undefined {
        return this['geo_forensic'];
    }
    public withStackForensic(stackForensic: EventForensicInfoStackForensic): EventForensicInfo {
        this['stack_forensic'] = stackForensic;
        return this;
    }
    public set stackForensic(stackForensic: EventForensicInfoStackForensic  | undefined) {
        this['stack_forensic'] = stackForensic;
    }
    public get stackForensic(): EventForensicInfoStackForensic | undefined {
        return this['stack_forensic'];
    }
    public withImageBlockForensic(imageBlockForensic: EventForensicInfoImageBlockForensic): EventForensicInfo {
        this['image_block_forensic'] = imageBlockForensic;
        return this;
    }
    public set imageBlockForensic(imageBlockForensic: EventForensicInfoImageBlockForensic  | undefined) {
        this['image_block_forensic'] = imageBlockForensic;
    }
    public get imageBlockForensic(): EventForensicInfoImageBlockForensic | undefined {
        return this['image_block_forensic'];
    }
    public withHoneyForensic(honeyForensic: Array<HoneyForensicInfo>): EventForensicInfo {
        this['honey_forensic'] = honeyForensic;
        return this;
    }
    public set honeyForensic(honeyForensic: Array<HoneyForensicInfo>  | undefined) {
        this['honey_forensic'] = honeyForensic;
    }
    public get honeyForensic(): Array<HoneyForensicInfo> | undefined {
        return this['honey_forensic'];
    }
}