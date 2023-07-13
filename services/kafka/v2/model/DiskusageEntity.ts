import { DiskusageTopicEntity } from './DiskusageTopicEntity';


export class DiskusageEntity {
    private 'broker_name'?: string | undefined;
    private 'data_disk_size'?: string | undefined;
    private 'data_disk_use'?: string | undefined;
    private 'data_disk_free'?: string | undefined;
    private 'data_disk_use_percentage'?: string | undefined;
    public status?: string;
    private 'topic_list'?: Array<DiskusageTopicEntity> | undefined;
    public constructor() { 
    }
    public withBrokerName(brokerName: string): DiskusageEntity {
        this['broker_name'] = brokerName;
        return this;
    }
    public set brokerName(brokerName: string | undefined) {
        this['broker_name'] = brokerName;
    }
    public get brokerName() {
        return this['broker_name'];
    }
    public withDataDiskSize(dataDiskSize: string): DiskusageEntity {
        this['data_disk_size'] = dataDiskSize;
        return this;
    }
    public set dataDiskSize(dataDiskSize: string | undefined) {
        this['data_disk_size'] = dataDiskSize;
    }
    public get dataDiskSize() {
        return this['data_disk_size'];
    }
    public withDataDiskUse(dataDiskUse: string): DiskusageEntity {
        this['data_disk_use'] = dataDiskUse;
        return this;
    }
    public set dataDiskUse(dataDiskUse: string | undefined) {
        this['data_disk_use'] = dataDiskUse;
    }
    public get dataDiskUse() {
        return this['data_disk_use'];
    }
    public withDataDiskFree(dataDiskFree: string): DiskusageEntity {
        this['data_disk_free'] = dataDiskFree;
        return this;
    }
    public set dataDiskFree(dataDiskFree: string | undefined) {
        this['data_disk_free'] = dataDiskFree;
    }
    public get dataDiskFree() {
        return this['data_disk_free'];
    }
    public withDataDiskUsePercentage(dataDiskUsePercentage: string): DiskusageEntity {
        this['data_disk_use_percentage'] = dataDiskUsePercentage;
        return this;
    }
    public set dataDiskUsePercentage(dataDiskUsePercentage: string | undefined) {
        this['data_disk_use_percentage'] = dataDiskUsePercentage;
    }
    public get dataDiskUsePercentage() {
        return this['data_disk_use_percentage'];
    }
    public withStatus(status: string): DiskusageEntity {
        this['status'] = status;
        return this;
    }
    public withTopicList(topicList: Array<DiskusageTopicEntity>): DiskusageEntity {
        this['topic_list'] = topicList;
        return this;
    }
    public set topicList(topicList: Array<DiskusageTopicEntity> | undefined) {
        this['topic_list'] = topicList;
    }
    public get topicList() {
        return this['topic_list'];
    }
}