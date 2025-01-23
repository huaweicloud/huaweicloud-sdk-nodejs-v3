

export class MemberHealthCheckFailedReason {
    private 'reason_code'?: string;
    private 'expected_response'?: string;
    private 'healthcheck_response'?: string;
    public constructor(reasonCode?: string, expectedResponse?: string, healthcheckResponse?: string) { 
        this['reason_code'] = reasonCode;
        this['expected_response'] = expectedResponse;
        this['healthcheck_response'] = healthcheckResponse;
    }
    public withReasonCode(reasonCode: string): MemberHealthCheckFailedReason {
        this['reason_code'] = reasonCode;
        return this;
    }
    public set reasonCode(reasonCode: string  | undefined) {
        this['reason_code'] = reasonCode;
    }
    public get reasonCode(): string | undefined {
        return this['reason_code'];
    }
    public withExpectedResponse(expectedResponse: string): MemberHealthCheckFailedReason {
        this['expected_response'] = expectedResponse;
        return this;
    }
    public set expectedResponse(expectedResponse: string  | undefined) {
        this['expected_response'] = expectedResponse;
    }
    public get expectedResponse(): string | undefined {
        return this['expected_response'];
    }
    public withHealthcheckResponse(healthcheckResponse: string): MemberHealthCheckFailedReason {
        this['healthcheck_response'] = healthcheckResponse;
        return this;
    }
    public set healthcheckResponse(healthcheckResponse: string  | undefined) {
        this['healthcheck_response'] = healthcheckResponse;
    }
    public get healthcheckResponse(): string | undefined {
        return this['healthcheck_response'];
    }
}