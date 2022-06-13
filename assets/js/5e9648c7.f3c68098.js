"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[36028],{36432:function(i){i.exports=JSON.parse('{"pluginId":"iota-rs","version":"current","label":"IOTA","banner":null,"badge":true,"className":"docs-version-current","isLast":true,"docsSidebars":{"docs":[{"type":"link","label":"Welcome","href":"/iota.rs/welcome","docId":"welcome"},{"type":"link","label":"Overview","href":"/iota.rs/overview","docId":"overview"},{"type":"link","label":"Getting Started","href":"/iota.rs/getting_started","docId":"getting_started"},{"type":"category","label":"Libraries","collapsed":false,"items":[{"type":"link","label":"Overview","href":"/iota.rs/libraries/overview","docId":"libraries/overview"},{"type":"category","label":"Rust","items":[{"type":"link","label":"Getting Started","href":"/iota.rs/libraries/rust/getting_started","docId":"libraries/rust/getting_started"},{"type":"link","label":"Examples","href":"/iota.rs/libraries/rust/examples","docId":"libraries/rust/examples"},{"type":"link","label":"API Reference","href":"/iota.rs/libraries/rust/api_reference","docId":"libraries/rust/api_reference"}],"collapsed":true,"collapsible":true},{"type":"category","label":"Node.js","items":[{"type":"link","label":"Getting Started","href":"/iota.rs/libraries/nodejs/getting_started","docId":"libraries/nodejs/getting_started"},{"type":"link","label":"Examples","href":"/iota.rs/libraries/nodejs/examples","docId":"libraries/nodejs/examples"},{"type":"link","label":"API Reference","href":"/iota.rs/libraries/nodejs/api_reference","docId":"libraries/nodejs/api_reference"}],"collapsed":true,"collapsible":true},{"type":"category","label":"Python","items":[{"type":"link","label":"Getting Started","href":"/iota.rs/libraries/python/getting_started","docId":"libraries/python/getting_started"},{"type":"link","label":"Examples","href":"/iota.rs/libraries/python/examples","docId":"libraries/python/examples"},{"type":"link","label":"API Reference","href":"/iota.rs/libraries/python/api_reference","docId":"libraries/python/api_reference"}],"collapsed":true,"collapsible":true},{"type":"category","label":"Java","items":[{"type":"link","label":"Getting Started","href":"/iota.rs/libraries/java/getting_started","docId":"libraries/java/getting_started"},{"type":"link","label":"Android","href":"/iota.rs/libraries/java/android_development","docId":"libraries/java/android_development"},{"type":"link","label":"Examples","href":"/iota.rs/libraries/java/examples","docId":"libraries/java/examples"},{"type":"link","label":"API Reference","href":"/iota.rs/libraries/java/api_reference","docId":"libraries/java/api_reference"}],"collapsed":true,"collapsible":true},{"type":"category","label":"Wasm","items":[{"type":"link","label":"Getting Started","href":"/iota.rs/libraries/wasm/getting_started","docId":"libraries/wasm/getting_started"},{"type":"link","label":"Examples","href":"/iota.rs/libraries/wasm/examples","docId":"libraries/wasm/examples"},{"type":"link","label":"API Reference","href":"/iota.rs/libraries/wasm/api_reference","docId":"libraries/wasm/api_reference"}],"collapsed":true,"collapsible":true}],"collapsible":true},{"type":"link","label":"Specification","href":"/iota.rs/specs","docId":"specs"},{"type":"link","label":"Troubleshooting","href":"/iota.rs/troubleshooting","docId":"troubleshooting"},{"type":"link","label":"Contribute","href":"/iota.rs/contribute","docId":"contribute"}]},"docs":{"contribute":{"id":"contribute","title":"Contribute to the Project","description":"Contribute to the IOTA Client Library joining the IOTA Libraries Initiative, contributing to the official GitHub repository or sharing your knowledge on Discord.","sidebar":"docs"},"getting_started":{"id":"getting_started","title":"Getting Started","description":"Choose your binding and get started with the IOTA Client Library.","sidebar":"docs"},"libraries/java/android_development":{"id":"libraries/java/android_development","title":"Android development","description":"Official IOTA Wallet Library Java API reference.","sidebar":"docs"},"libraries/java/api_reference":{"id":"libraries/java/api_reference","title":"API Reference","description":"Official IOTA Client Library Java API reference.","sidebar":"docs"},"libraries/java/api/Address":{"id":"libraries/java/api/Address","title":"Address","description":"tryFromBech32(addr): Address"},"libraries/java/api/AddressDto":{"id":"libraries/java/api/AddressDto","title":"AddressDto","description":"kind(): short"},"libraries/java/api/AddressIndexRecorder":{"id":"libraries/java/api/AddressIndexRecorder","title":"AddressIndexRecorder","description":"Structure for sorting of UnlockBlocks"},"libraries/java/api/AddressPublicWrapper":{"id":"libraries/java/api/AddressPublicWrapper","title":"AddressPublicWrapper","description":"isPublic(): boolean"},"libraries/java/api/AddressStringPublicWrapper":{"id":"libraries/java/api/AddressStringPublicWrapper","title":"AddressStringPublicWrapper","description":"isPublic(): boolean"},"libraries/java/api/Api":{"id":"libraries/java/api/Api","title":"Api","description":"GET_HEALTH"},"libraries/java/api/BalanceAddressResponse":{"id":"libraries/java/api/BalanceAddressResponse","title":"BalanceAddressResponse","description":"Response of an address balance request"},"libraries/java/api/BrokerOptions":{"id":"libraries/java/api/BrokerOptions","title":"BrokerOptions","description":"The MQTT broker options."},"libraries/java/api/Chain":{"id":"libraries/java/api/Chain","title":"Chain","description":"slip10 chain"},"libraries/java/api/Client":{"id":"libraries/java/api/Client","title":"Client","description":"The iota.rs client instance"},"libraries/java/api/ClientBuilder":{"id":"libraries/java/api/ClientBuilder","title":"ClientBuilder","description":"The options builder for a client connected to multiple nodes."},"libraries/java/api/ClientException":{"id":"libraries/java/api/ClientException","title":"ClientException","description":"ClientException(): ClientException"},"libraries/java/api/ClientMessageBuilder":{"id":"libraries/java/api/ClientMessageBuilder","title":"ClientMessageBuilder","description":"withSeed(seed): ClientMessageBuilder"},"libraries/java/api/ClientMiner":{"id":"libraries/java/api/ClientMiner","title":"ClientMiner","description":"Client miner, used as"},"libraries/java/api/Essence":{"id":"libraries/java/api/Essence","title":"Essence","description":"asRegular(): RegularEssence"},"libraries/java/api/GetAddressBuilder":{"id":"libraries/java/api/GetAddressBuilder","title":"GetAddressBuilder","description":"Builder of GET /api/v1/address/ endpoint"},"libraries/java/api/GetAddressesBuilder":{"id":"libraries/java/api/GetAddressesBuilder","title":"GetAddressesBuilder","description":"from(seed): GetAddressesBuilder"},"libraries/java/api/GetBalanceBuilderApi":{"id":"libraries/java/api/GetBalanceBuilderApi","title":"GetBalanceBuilderApi","description":"withAccountIndex(account_index): GetBalanceBuilderApi"},"libraries/java/api/GetMessageBuilder":{"id":"libraries/java/api/GetMessageBuilder","title":"GetMessageBuilder","description":"indexString(index): MessageId[]"},"libraries/java/api/GossipDto":{"id":"libraries/java/api/GossipDto","title":"GossipDto","description":"heartbeat(): HeartbeatDto"},"libraries/java/api/HeartbeatDto":{"id":"libraries/java/api/HeartbeatDto","title":"HeartbeatDto","description":"solidMilestoneIndex(): long"},"libraries/java/api/IndexationPayload":{"id":"libraries/java/api/IndexationPayload","title":"IndexationPayload","description":"fromBytes(index, data): IndexationPayload"},"libraries/java/api/IndexPublicDto":{"id":"libraries/java/api/IndexPublicDto","title":"IndexPublicDto","description":"index(): long"},"libraries/java/api/InfoResponse":{"id":"libraries/java/api/InfoResponse","title":"InfoResponse","description":"Response of GET /api/v1/info."},"libraries/java/api/Input":{"id":"libraries/java/api/Input","title":"Input","description":"kind(): InputKind"},"libraries/java/api/InputKind":{"id":"libraries/java/api/InputKind","title":"InputKind","description":"UTXO"},"libraries/java/api/LedgerInclusionStateDto":{"id":"libraries/java/api/LedgerInclusionStateDto","title":"LedgerInclusionStateDto","description":"CONFLICTING"},"libraries/java/api/Message":{"id":"libraries/java/api/Message","title":"Message","description":"Represent the object that nodes gossip around the network."},"libraries/java/api/MessageBuilder":{"id":"libraries/java/api/MessageBuilder","title":"MessageBuilder","description":"A builder to build a Message."},"libraries/java/api/MessageId":{"id":"libraries/java/api/MessageId","title":"MessageId","description":"MessageId(): MessageId"},"libraries/java/api/MessageMetadata":{"id":"libraries/java/api/MessageMetadata","title":"MessageMetadata","description":"Response of GET /api/v1/messages//metadata."},"libraries/java/api/MessagePayload":{"id":"libraries/java/api/MessagePayload","title":"MessagePayload","description":"Message payload wrapper"},"libraries/java/api/MessagePayloadType":{"id":"libraries/java/api/MessagePayloadType","title":"MessagePayloadType","description":"TRANSACTION"},"libraries/java/api/MessageWrap":{"id":"libraries/java/api/MessageWrap","title":"MessageWrap","description":"message_id(): MessageId"},"libraries/java/api/MetricsDto":{"id":"libraries/java/api/MetricsDto","title":"MetricsDto","description":"newMessages(): long"},"libraries/java/api/MigratedFundsEntry":{"id":"libraries/java/api/MigratedFundsEntry","title":"MigratedFundsEntry","description":"from(hash, output): MigratedFundsEntry"},"libraries/java/api/MigratedFundsEntryDto":{"id":"libraries/java/api/MigratedFundsEntryDto","title":"MigratedFundsEntryDto","description":"tailTransactionHash(): String"},"libraries/java/api/MilestoneId":{"id":"libraries/java/api/MilestoneId","title":"MilestoneId","description":"fromString(str_rep): MilestoneId"},"libraries/java/api/MilestonePayload":{"id":"libraries/java/api/MilestonePayload","title":"MilestonePayload","description":"A payload which defines the inclusion set of other messages in the Tangle."},"libraries/java/api/MilestonePayloadEssence":{"id":"libraries/java/api/MilestonePayloadEssence","title":"MilestonePayloadEssence","description":"index(): long"},"libraries/java/api/MilestoneResponse":{"id":"libraries/java/api/MilestoneResponse","title":"MilestoneResponse","description":"index(): long"},"libraries/java/api/MilestoneSignature":{"id":"libraries/java/api/MilestoneSignature","title":"MilestoneSignature","description":"getSignature(): byte[]"},"libraries/java/api/MilestoneUtxoChangesResponse":{"id":"libraries/java/api/MilestoneUtxoChangesResponse","title":"MilestoneUtxoChangesResponse","description":"index(): long"},"libraries/java/api/MqttEvent":{"id":"libraries/java/api/MqttEvent","title":"MqttEvent","description":"CONNECTED"},"libraries/java/api/MqttListener":{"id":"libraries/java/api/MqttListener","title":"MqttListener","description":"onEvent(event): void"},"libraries/java/api/MqttManager":{"id":"libraries/java/api/MqttManager","title":"MqttManager","description":"withTopic(topic): MqttTopicManager"},"libraries/java/api/MqttTopicManager":{"id":"libraries/java/api/MqttTopicManager","title":"MqttTopicManager","description":"withTopic(topic): MqttTopicManager"},"libraries/java/api/NativeAPI":{"id":"libraries/java/api/NativeAPI","title":"NativeAPI","description":"The NativeAPI class, which houses all entrypoints to the shared library."},"libraries/java/api/NetworkInfo":{"id":"libraries/java/api/NetworkInfo","title":"NetworkInfo","description":"Struct containing network and PoW related information"},"libraries/java/api/Node":{"id":"libraries/java/api/Node","title":"Node","description":"Node struct"},"libraries/java/api/NodeInfoWrapper":{"id":"libraries/java/api/NodeInfoWrapper","title":"NodeInfoWrapper","description":"Wrapper for node information"},"libraries/java/api/Output":{"id":"libraries/java/api/Output","title":"Output","description":"kind(): OutputKind"},"libraries/java/api/OutputDto":{"id":"libraries/java/api/OutputDto","title":"OutputDto","description":"Wrapper for different output types"},"libraries/java/api/OutputKind":{"id":"libraries/java/api/OutputKind","title":"OutputKind","description":"SIGNATURELOCKEDSINGLE"},"libraries/java/api/OutputResponse":{"id":"libraries/java/api/OutputResponse","title":"OutputResponse","description":"Response of GET /api/v1/outputs/."},"libraries/java/api/OutputsOptions":{"id":"libraries/java/api/OutputsOptions","title":"OutputsOptions","description":"OutputsOptions(): OutputsOptions"},"libraries/java/api/PeerDto":{"id":"libraries/java/api/PeerDto","title":"PeerDto","description":"Describes a peer."},"libraries/java/api/PreparedTransactionData":{"id":"libraries/java/api/PreparedTransactionData","title":"PreparedTransactionData","description":"Helper struct for offline signing"},"libraries/java/api/PublicKey":{"id":"libraries/java/api/PublicKey","title":"PublicKey","description":"verify(sig, bytes): boolean"},"libraries/java/api/ReceiptDto":{"id":"libraries/java/api/ReceiptDto","title":"ReceiptDto","description":"receipt(): ReceiptPayloadDto"},"libraries/java/api/ReceiptPayload":{"id":"libraries/java/api/ReceiptPayload","title":"ReceiptPayload","description":"from(migrated_at, last, funds, transaction): ReceiptPayload"},"libraries/java/api/ReceiptPayloadDto":{"id":"libraries/java/api/ReceiptPayloadDto","title":"ReceiptPayloadDto","description":"kind(): long"},"libraries/java/api/ReferenceUnlock":{"id":"libraries/java/api/ReferenceUnlock","title":"ReferenceUnlock","description":"from(index): ReferenceUnlock"},"libraries/java/api/RegularEssence":{"id":"libraries/java/api/RegularEssence","title":"RegularEssence","description":"inputs(): Input[]"},"libraries/java/api/Relation":{"id":"libraries/java/api/Relation","title":"Relation","description":"KNOWN"},"libraries/java/api/RustHex":{"id":"libraries/java/api/RustHex","title":"RustHex","description":"encode(a0): String"},"libraries/java/api/RustLogging":{"id":"libraries/java/api/RustLogging","title":"RustLogging","description":"init(): void"},"libraries/java/api/SecretKey":{"id":"libraries/java/api/SecretKey","title":"SecretKey","description":"generate(): SecretKey"},"libraries/java/api/Signature":{"id":"libraries/java/api/Signature","title":"Signature","description":"toBytes(): byte[]"},"libraries/java/api/SignatureLockedDustAllowanceOutput":{"id":"libraries/java/api/SignatureLockedDustAllowanceOutput","title":"SignatureLockedDustAllowanceOutput","description":"Output type for deposits that enables an address to receive dust outputs. It can be consumed as an input like a"},"libraries/java/api/SignatureLockedDustAllowanceOutputDto":{"id":"libraries/java/api/SignatureLockedDustAllowanceOutputDto","title":"SignatureLockedDustAllowanceOutputDto","description":"Output type for deposits that enables an address to receive dust outputs. It can be consumed as an input like a"},"libraries/java/api/SignatureLockedSingleOutput":{"id":"libraries/java/api/SignatureLockedSingleOutput","title":"SignatureLockedSingleOutput","description":"Describes a deposit to a single address which is unlocked via a signature."},"libraries/java/api/SignatureLockedSingleOutputDto":{"id":"libraries/java/api/SignatureLockedSingleOutputDto","title":"SignatureLockedSingleOutputDto","description":"Describes a deposit to a single address which is unlocked via a signature."},"libraries/java/api/SignatureUnlock":{"id":"libraries/java/api/SignatureUnlock","title":"SignatureUnlock","description":"SignatureUnlock(public_key, signature): SignatureUnlock"},"libraries/java/api/Topic":{"id":"libraries/java/api/Topic","title":"Topic","description":"from(topic): Topic"},"libraries/java/api/TopicEvent":{"id":"libraries/java/api/TopicEvent","title":"TopicEvent","description":"topic(): String"},"libraries/java/api/TransactionId":{"id":"libraries/java/api/TransactionId","title":"TransactionId","description":"fromString(str_rep): TransactionId"},"libraries/java/api/TransactionPayload":{"id":"libraries/java/api/TransactionPayload","title":"TransactionPayload","description":"builder(): TransactionPayloadBuilder"},"libraries/java/api/TransactionPayloadBuilder":{"id":"libraries/java/api/TransactionPayloadBuilder","title":"TransactionPayloadBuilder","description":"TransactionPayloadBuilder(): TransactionPayloadBuilder"},"libraries/java/api/TreasuryInput":{"id":"libraries/java/api/TreasuryInput","title":"TreasuryInput","description":"TreasuryInput is an input which references a milestone which generated a TreasuryOutput."},"libraries/java/api/TreasuryOutput":{"id":"libraries/java/api/TreasuryOutput","title":"TreasuryOutput","description":"Trasury output."},"libraries/java/api/TreasuryOutputDto":{"id":"libraries/java/api/TreasuryOutputDto","title":"TreasuryOutputDto","description":"kind(): short"},"libraries/java/api/TreasuryPayload":{"id":"libraries/java/api/TreasuryPayload","title":"TreasuryPayload","description":"TreasuryPayload(input, output): TreasuryPayload"},"libraries/java/api/TreasuryResponse":{"id":"libraries/java/api/TreasuryResponse","title":"TreasuryResponse","description":"Response of GET /api/v1/treasury."},"libraries/java/api/UnlockBlock":{"id":"libraries/java/api/UnlockBlock","title":"UnlockBlock","description":"kind(): UnlockBlockKind"},"libraries/java/api/UnlockBlockKind":{"id":"libraries/java/api/UnlockBlockKind","title":"UnlockBlockKind","description":"ED25519"},"libraries/java/api/UnlockBlocks":{"id":"libraries/java/api/UnlockBlocks","title":"UnlockBlocks","description":"from(unlock_blocks): UnlockBlocks"},"libraries/java/api/Util":{"id":"libraries/java/api/Util","title":"Util","description":"consolidateFunds(client, seed, accountindex, addressrangelow, addressrange_high): String"},"libraries/java/api/UtxoInput":{"id":"libraries/java/api/UtxoInput","title":"UtxoInput","description":"Represents an input referencing an output."},"libraries/java/examples":{"id":"libraries/java/examples","title":"Examples","description":"Official IOTA Client Library Java API examples.","sidebar":"docs"},"libraries/java/getting_started":{"id":"libraries/java/getting_started","title":"Getting Started with Java","description":"Getting started with the official IOTA Client Library Java binding.","sidebar":"docs"},"libraries/nodejs/api_reference":{"id":"libraries/nodejs/api_reference","title":"API Reference - IOTA Client Library - Node.js binding","description":"Official IOTA Client Library Node.js API reference.","sidebar":"docs"},"libraries/nodejs/examples":{"id":"libraries/nodejs/examples","title":"Examples","description":"Official IOTA Client Library Software Node.js examples.","sidebar":"docs"},"libraries/nodejs/getting_started":{"id":"libraries/nodejs/getting_started","title":"Getting Started With Node.js","description":"Getting started with the official IOTA Client Library Node.js binding.","sidebar":"docs"},"libraries/overview":{"id":"libraries/overview","title":"IOTA Client Libraries","description":"There are Node.js, Python, Java, and Wasm bindings for the iota.rs client Rust library.","sidebar":"docs"},"libraries/python/api_reference":{"id":"libraries/python/api_reference","title":"IOTA Client Python Library","description":"Official IOTA Client Library Python API reference.","sidebar":"docs"},"libraries/python/examples":{"id":"libraries/python/examples","title":"Examples","description":"Official IOTA Client Library Software Python examples.","sidebar":"docs"},"libraries/python/getting_started":{"id":"libraries/python/getting_started","title":"Getting Started with IOTA Client Python Binding","description":"Getting started with the official IOTA Client Library Python binding.","sidebar":"docs"},"libraries/rust/api_reference":{"id":"libraries/rust/api_reference","title":"API Reference","description":"Official IOTA Client Library Rust API reference.","sidebar":"docs"},"libraries/rust/examples":{"id":"libraries/rust/examples","title":"Examples","description":"Official IOTA Client Library Software Rust examples.","sidebar":"docs"},"libraries/rust/getting_started":{"id":"libraries/rust/getting_started","title":"Getting Started With Rust","description":"Getting started with the official IOTA Client Library Rust library.","sidebar":"docs"},"libraries/wasm/api_reference":{"id":"libraries/wasm/api_reference","title":"api_reference","description":"Classes","sidebar":"docs"},"libraries/wasm/examples":{"id":"libraries/wasm/examples","title":"Examples","description":"Official IOTA Client Library Software WASM examples.","sidebar":"docs"},"libraries/wasm/getting_started":{"id":"libraries/wasm/getting_started","title":"Getting Started with Wasm","description":"Install the library:","sidebar":"docs"},"libraries/wasm/troubleshooting":{"id":"libraries/wasm/troubleshooting","title":"Troubleshooting","description":"StackExchange"},"overview":{"id":"overview","title":"Overview","description":"The wallet library is a stateful package with a standardized interface for developers to build applications involving IOTA value transactions.","sidebar":"docs"},"specs":{"id":"specs","title":"High Level API Specification","description":"IOTA Client Library user-friendly API specifications.","sidebar":"docs"},"troubleshooting":{"id":"troubleshooting","title":"Troubleshooting","description":"Troubleshooting the IOTA Client Library.","sidebar":"docs"},"welcome":{"id":"welcome","title":"Welcome","description":"Official IOTA Client Library which can be used to easily integrate an IOTA Client into your application","sidebar":"docs"}}}')}}]);