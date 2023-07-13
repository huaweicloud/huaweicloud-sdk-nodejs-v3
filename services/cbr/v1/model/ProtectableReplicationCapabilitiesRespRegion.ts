

export class ProtectableReplicationCapabilitiesRespRegion {
    public name: string;
    private 'replication_destinations': Array<string> | undefined;
    public constructor(name?: any, replicationDestinations?: any) { 
        this['name'] = name;
        this['replication_destinations'] = replicationDestinations;
    }
    public withName(name: string): ProtectableReplicationCapabilitiesRespRegion {
        this['name'] = name;
        return this;
    }
    public withReplicationDestinations(replicationDestinations: Array<string>): ProtectableReplicationCapabilitiesRespRegion {
        this['replication_destinations'] = replicationDestinations;
        return this;
    }
    public set replicationDestinations(replicationDestinations: Array<string> | undefined) {
        this['replication_destinations'] = replicationDestinations;
    }
    public get replicationDestinations() {
        return this['replication_destinations'];
    }
}