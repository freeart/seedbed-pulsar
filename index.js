const assert = require('assert'),
	Pulsar = require('pulsar-client')

module.exports = function () {
	assert(!this.pulsar, "field exists")

	this.pulsar = new Pulsar.Client({
		serviceUrl: this.config.get("pulsar.serviceUrl"),
		authentication: this.config.get("pulsar.authentication"),
		binding: this.config.get("pulsar.binding"),
		operationTimeoutSeconds: this.config.get("pulsar.operationTimeoutSeconds") ? parseInt(this.config.get("pulsar.operationTimeoutSeconds"), 10) : null,
		ioThreads: this.config.get("pulsar.ioThreads") ? parseInt(this.config.get("pulsar.ioThreads"), 10) : null,
		messageListenerThreads: this.config.get("pulsar.messageListenerThreads") ? parseInt(this.config.get("pulsar.messageListenerThreads"), 10) : null,
		concurrentLookupRequest: this.config.get("pulsar.concurrentLookupRequest") ? parseInt(this.config.get("pulsar.concurrentLookupRequest"), 10) : null,
		useTls: this.config.get("pulsar.useTls") ? !!parseInt(this.config.get("pulsar.useTls"), 10) : null,
		tlsTrustCertsFilePath: this.config.get("pulsar.tlsTrustCertsFilePath"),
		tlsValidateHostname: this.config.get("pulsar.tlsValidateHostname") ? !!parseInt(this.config.get("pulsar.tlsValidateHostname"), 10) : null,
		tlsAllowInsecureConnection: this.config.get("pulsar.tlsAllowInsecureConnection") ? !!parseInt(this.config.get("pulsar.tlsAllowInsecureConnection"), 10) : null,
		statsIntervalInSeconds: this.config.get("pulsar.statsIntervalInSeconds") ? parseInt(this.config.get("pulsar.statsIntervalInSeconds"), 10) : null
	});
	this.Pulsar = Pulsar;

	return Promise.resolve();
}