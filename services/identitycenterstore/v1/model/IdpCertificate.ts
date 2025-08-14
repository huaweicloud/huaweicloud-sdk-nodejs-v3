

export class IdpCertificate {
    private 'certificate_id'?: string;
    private 'issuer_name'?: string;
    private 'not_after'?: number;
    private 'not_before'?: number;
    private 'public_key'?: string;
    private 'serial_number'?: number;
    private 'serial_number_string'?: string;
    private 'signature_algorithm_name'?: string;
    private 'subject_name'?: string;
    public version?: number;
    private 'x509_Certificate_in_pem'?: string;
    public constructor(certificateId?: string, issuerName?: string, notAfter?: number, notBefore?: number, publicKey?: string, serialNumber?: number, serialNumberString?: string, signatureAlgorithmName?: string, subjectName?: string, version?: number, x509CertificateInPem?: string) { 
        this['certificate_id'] = certificateId;
        this['issuer_name'] = issuerName;
        this['not_after'] = notAfter;
        this['not_before'] = notBefore;
        this['public_key'] = publicKey;
        this['serial_number'] = serialNumber;
        this['serial_number_string'] = serialNumberString;
        this['signature_algorithm_name'] = signatureAlgorithmName;
        this['subject_name'] = subjectName;
        this['version'] = version;
        this['x509_Certificate_in_pem'] = x509CertificateInPem;
    }
    public withCertificateId(certificateId: string): IdpCertificate {
        this['certificate_id'] = certificateId;
        return this;
    }
    public set certificateId(certificateId: string  | undefined) {
        this['certificate_id'] = certificateId;
    }
    public get certificateId(): string | undefined {
        return this['certificate_id'];
    }
    public withIssuerName(issuerName: string): IdpCertificate {
        this['issuer_name'] = issuerName;
        return this;
    }
    public set issuerName(issuerName: string  | undefined) {
        this['issuer_name'] = issuerName;
    }
    public get issuerName(): string | undefined {
        return this['issuer_name'];
    }
    public withNotAfter(notAfter: number): IdpCertificate {
        this['not_after'] = notAfter;
        return this;
    }
    public set notAfter(notAfter: number  | undefined) {
        this['not_after'] = notAfter;
    }
    public get notAfter(): number | undefined {
        return this['not_after'];
    }
    public withNotBefore(notBefore: number): IdpCertificate {
        this['not_before'] = notBefore;
        return this;
    }
    public set notBefore(notBefore: number  | undefined) {
        this['not_before'] = notBefore;
    }
    public get notBefore(): number | undefined {
        return this['not_before'];
    }
    public withPublicKey(publicKey: string): IdpCertificate {
        this['public_key'] = publicKey;
        return this;
    }
    public set publicKey(publicKey: string  | undefined) {
        this['public_key'] = publicKey;
    }
    public get publicKey(): string | undefined {
        return this['public_key'];
    }
    public withSerialNumber(serialNumber: number): IdpCertificate {
        this['serial_number'] = serialNumber;
        return this;
    }
    public set serialNumber(serialNumber: number  | undefined) {
        this['serial_number'] = serialNumber;
    }
    public get serialNumber(): number | undefined {
        return this['serial_number'];
    }
    public withSerialNumberString(serialNumberString: string): IdpCertificate {
        this['serial_number_string'] = serialNumberString;
        return this;
    }
    public set serialNumberString(serialNumberString: string  | undefined) {
        this['serial_number_string'] = serialNumberString;
    }
    public get serialNumberString(): string | undefined {
        return this['serial_number_string'];
    }
    public withSignatureAlgorithmName(signatureAlgorithmName: string): IdpCertificate {
        this['signature_algorithm_name'] = signatureAlgorithmName;
        return this;
    }
    public set signatureAlgorithmName(signatureAlgorithmName: string  | undefined) {
        this['signature_algorithm_name'] = signatureAlgorithmName;
    }
    public get signatureAlgorithmName(): string | undefined {
        return this['signature_algorithm_name'];
    }
    public withSubjectName(subjectName: string): IdpCertificate {
        this['subject_name'] = subjectName;
        return this;
    }
    public set subjectName(subjectName: string  | undefined) {
        this['subject_name'] = subjectName;
    }
    public get subjectName(): string | undefined {
        return this['subject_name'];
    }
    public withVersion(version: number): IdpCertificate {
        this['version'] = version;
        return this;
    }
    public withX509CertificateInPem(x509CertificateInPem: string): IdpCertificate {
        this['x509_Certificate_in_pem'] = x509CertificateInPem;
        return this;
    }
    public set x509CertificateInPem(x509CertificateInPem: string  | undefined) {
        this['x509_Certificate_in_pem'] = x509CertificateInPem;
    }
    public get x509CertificateInPem(): string | undefined {
        return this['x509_Certificate_in_pem'];
    }
}