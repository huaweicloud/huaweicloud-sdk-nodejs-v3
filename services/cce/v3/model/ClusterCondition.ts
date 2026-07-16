

export class ClusterCondition {
    public type?: ClusterConditionTypeEnum | string;
    public status?: string;
    public lastProbeTime?: string;
    public lastTransitTime?: string;
    public reason?: string;
    public message?: string;
    public constructor() { 
    }
    public withType(type: ClusterConditionTypeEnum | string): ClusterCondition {
        this['type'] = type;
        return this;
    }
    public withStatus(status: string): ClusterCondition {
        this['status'] = status;
        return this;
    }
    public withLastProbeTime(lastProbeTime: string): ClusterCondition {
        this['lastProbeTime'] = lastProbeTime;
        return this;
    }
    public withLastTransitTime(lastTransitTime: string): ClusterCondition {
        this['lastTransitTime'] = lastTransitTime;
        return this;
    }
    public withReason(reason: string): ClusterCondition {
        this['reason'] = reason;
        return this;
    }
    public withMessage(message: string): ClusterCondition {
        this['message'] = message;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ClusterConditionTypeEnum {
    AGENCYAVAILABLE = 'AgencyAvailable',
    CLUSTERCERTIFICATE = 'ClusterCertificate',
    CLUSTERCUSTOMCERTIFICATE = 'ClusterCustomCertificate',
    CERTIFICATEROTATION = 'CertificateRotation',
    CUSTOMCERTIFICATEROTATION = 'CustomCertificateRotation',
    OPENIDCONNECTPROCESSING = 'OpenIDConnectProcessing',
    OPENIDCONNECTPROCESSSUCCESS = 'OpenIDConnectProcessSuccess',
    OPENIDCONNECTPROCESSFAILED = 'OpenIDConnectProcessFailed'
}
