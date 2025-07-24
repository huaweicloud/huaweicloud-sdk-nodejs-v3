

export class ReportFilter {
    public creatorIds?: string;
    public ownerIds?: string;
    public ranks?: string;
    public releaseIds?: string;
    public status?: string;
    public moduleIds?: string;
    public results?: string;
    public labelIds?: string;
    public startTime?: string;
    public endTime?: string;
    public isAssociateIssue?: string;
    public constructor() { 
    }
    public withCreatorIds(creatorIds: string): ReportFilter {
        this['creatorIds'] = creatorIds;
        return this;
    }
    public withOwnerIds(ownerIds: string): ReportFilter {
        this['ownerIds'] = ownerIds;
        return this;
    }
    public withRanks(ranks: string): ReportFilter {
        this['ranks'] = ranks;
        return this;
    }
    public withReleaseIds(releaseIds: string): ReportFilter {
        this['releaseIds'] = releaseIds;
        return this;
    }
    public withStatus(status: string): ReportFilter {
        this['status'] = status;
        return this;
    }
    public withModuleIds(moduleIds: string): ReportFilter {
        this['moduleIds'] = moduleIds;
        return this;
    }
    public withResults(results: string): ReportFilter {
        this['results'] = results;
        return this;
    }
    public withLabelIds(labelIds: string): ReportFilter {
        this['labelIds'] = labelIds;
        return this;
    }
    public withStartTime(startTime: string): ReportFilter {
        this['startTime'] = startTime;
        return this;
    }
    public withEndTime(endTime: string): ReportFilter {
        this['endTime'] = endTime;
        return this;
    }
    public withIsAssociateIssue(isAssociateIssue: string): ReportFilter {
        this['isAssociateIssue'] = isAssociateIssue;
        return this;
    }
}