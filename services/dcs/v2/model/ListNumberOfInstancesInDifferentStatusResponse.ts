import { StatusStatistic } from './StatusStatistic';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListNumberOfInstancesInDifferentStatusResponse extends SdkResponse {
    public redis?: StatusStatistic;
    public memcached?: StatusStatistic;
    private 'paying_count'?: number | undefined;
    private 'freezing_count'?: number | undefined;
    private 'migrating_count'?: number | undefined;
    private 'flushing_count'?: number | undefined;
    private 'upgrading_count'?: number | undefined;
    private 'restoring_count'?: number | undefined;
    private 'extending_count'?: number | undefined;
    private 'creating_count'?: number | undefined;
    private 'running_count'?: number | undefined;
    private 'error_count'?: number | undefined;
    private 'frozen_count'?: number | undefined;
    private 'createfailed_count'?: number | undefined;
    private 'restarting_count'?: number | undefined;
    public constructor() { 
        super();
    }
    public withRedis(redis: StatusStatistic): ListNumberOfInstancesInDifferentStatusResponse {
        this['redis'] = redis;
        return this;
    }
    public withMemcached(memcached: StatusStatistic): ListNumberOfInstancesInDifferentStatusResponse {
        this['memcached'] = memcached;
        return this;
    }
    public withPayingCount(payingCount: number): ListNumberOfInstancesInDifferentStatusResponse {
        this['paying_count'] = payingCount;
        return this;
    }
    public set payingCount(payingCount: number | undefined) {
        this['paying_count'] = payingCount;
    }
    public get payingCount() {
        return this['paying_count'];
    }
    public withFreezingCount(freezingCount: number): ListNumberOfInstancesInDifferentStatusResponse {
        this['freezing_count'] = freezingCount;
        return this;
    }
    public set freezingCount(freezingCount: number | undefined) {
        this['freezing_count'] = freezingCount;
    }
    public get freezingCount() {
        return this['freezing_count'];
    }
    public withMigratingCount(migratingCount: number): ListNumberOfInstancesInDifferentStatusResponse {
        this['migrating_count'] = migratingCount;
        return this;
    }
    public set migratingCount(migratingCount: number | undefined) {
        this['migrating_count'] = migratingCount;
    }
    public get migratingCount() {
        return this['migrating_count'];
    }
    public withFlushingCount(flushingCount: number): ListNumberOfInstancesInDifferentStatusResponse {
        this['flushing_count'] = flushingCount;
        return this;
    }
    public set flushingCount(flushingCount: number | undefined) {
        this['flushing_count'] = flushingCount;
    }
    public get flushingCount() {
        return this['flushing_count'];
    }
    public withUpgradingCount(upgradingCount: number): ListNumberOfInstancesInDifferentStatusResponse {
        this['upgrading_count'] = upgradingCount;
        return this;
    }
    public set upgradingCount(upgradingCount: number | undefined) {
        this['upgrading_count'] = upgradingCount;
    }
    public get upgradingCount() {
        return this['upgrading_count'];
    }
    public withRestoringCount(restoringCount: number): ListNumberOfInstancesInDifferentStatusResponse {
        this['restoring_count'] = restoringCount;
        return this;
    }
    public set restoringCount(restoringCount: number | undefined) {
        this['restoring_count'] = restoringCount;
    }
    public get restoringCount() {
        return this['restoring_count'];
    }
    public withExtendingCount(extendingCount: number): ListNumberOfInstancesInDifferentStatusResponse {
        this['extending_count'] = extendingCount;
        return this;
    }
    public set extendingCount(extendingCount: number | undefined) {
        this['extending_count'] = extendingCount;
    }
    public get extendingCount() {
        return this['extending_count'];
    }
    public withCreatingCount(creatingCount: number): ListNumberOfInstancesInDifferentStatusResponse {
        this['creating_count'] = creatingCount;
        return this;
    }
    public set creatingCount(creatingCount: number | undefined) {
        this['creating_count'] = creatingCount;
    }
    public get creatingCount() {
        return this['creating_count'];
    }
    public withRunningCount(runningCount: number): ListNumberOfInstancesInDifferentStatusResponse {
        this['running_count'] = runningCount;
        return this;
    }
    public set runningCount(runningCount: number | undefined) {
        this['running_count'] = runningCount;
    }
    public get runningCount() {
        return this['running_count'];
    }
    public withErrorCount(errorCount: number): ListNumberOfInstancesInDifferentStatusResponse {
        this['error_count'] = errorCount;
        return this;
    }
    public set errorCount(errorCount: number | undefined) {
        this['error_count'] = errorCount;
    }
    public get errorCount() {
        return this['error_count'];
    }
    public withFrozenCount(frozenCount: number): ListNumberOfInstancesInDifferentStatusResponse {
        this['frozen_count'] = frozenCount;
        return this;
    }
    public set frozenCount(frozenCount: number | undefined) {
        this['frozen_count'] = frozenCount;
    }
    public get frozenCount() {
        return this['frozen_count'];
    }
    public withCreatefailedCount(createfailedCount: number): ListNumberOfInstancesInDifferentStatusResponse {
        this['createfailed_count'] = createfailedCount;
        return this;
    }
    public set createfailedCount(createfailedCount: number | undefined) {
        this['createfailed_count'] = createfailedCount;
    }
    public get createfailedCount() {
        return this['createfailed_count'];
    }
    public withRestartingCount(restartingCount: number): ListNumberOfInstancesInDifferentStatusResponse {
        this['restarting_count'] = restartingCount;
        return this;
    }
    public set restartingCount(restartingCount: number | undefined) {
        this['restarting_count'] = restartingCount;
    }
    public get restartingCount() {
        return this['restarting_count'];
    }
}