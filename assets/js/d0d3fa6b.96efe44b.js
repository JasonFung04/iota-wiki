"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[15241],{68670:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return r},contentTitle:function(){return s},metadata:function(){return c},toc:function(){return u},default:function(){return p}});var a=n(74034),o=n(79973),i=(n(67294),n(3905)),l=["components"],r={description:"IOTA strives to provide output types beyond the basic functionality of a cryptocurrency application such as Smart Contracts.",image:"/img/protocol_specification/bob_alias.png",keywords:["smart contract chain","state metadata","state controller","governance controller","alias","smart contract","transactions","NFT"]},s="UTXO Output Types",c={unversionedId:"protocol_specification/components/advanced_outputs",id:"protocol_specification/components/advanced_outputs",isDocsHomePage:!1,title:"UTXO Output Types",description:"IOTA strives to provide output types beyond the basic functionality of a cryptocurrency application such as Smart Contracts.",source:"@site/external/goshimmer/documentation/docs/protocol_specification/components/advanced_outputs.md",sourceDirName:"protocol_specification/components",slug:"/protocol_specification/components/advanced_outputs",permalink:"/goshimmer/protocol_specification/components/advanced_outputs",tags:[],version:"current",frontMatter:{description:"IOTA strives to provide output types beyond the basic functionality of a cryptocurrency application such as Smart Contracts.",image:"/img/protocol_specification/bob_alias.png",keywords:["smart contract chain","state metadata","state controller","governance controller","alias","smart contract","transactions","NFT"]},sidebar:"docs",previous:{title:"ledgerstate",permalink:"/goshimmer/protocol_specification/components/ledgerstate"},next:{title:"Markers",permalink:"/goshimmer/protocol_specification/components/markers"}},u=[{value:"Motivation",id:"motivation",children:[],level:2},{value:"Functional Requirements of ISCP",id:"functional-requirements-of-iscp",children:[],level:2},{value:"Output Design",id:"output-design",children:[{value:"Introducing Alias Account",id:"introducing-alias-account",children:[],level:3},{value:"Representing a Smart Contract Chain Account in Ledger",id:"representing-a-smart-contract-chain-account-in-ledger",children:[],level:3},{value:"Consuming an Alias Output",id:"consuming-an-alias-output",children:[{value:"Unlocking via State Controller",id:"unlocking-via-state-controller",children:[],level:4},{value:"Unlocking via governance controller",id:"unlocking-via-governance-controller",children:[],level:4}],level:3}],level:2},{value:"Locking Funds Into Aliases",id:"locking-funds-into-aliases",children:[],level:2},{value:"Extended Output",id:"extended-output",children:[{value:"Unlocking via AliasID",id:"unlocking-via-aliasid",children:[],level:3},{value:"Unlocking via Fallback",id:"unlocking-via-fallback",children:[],level:3},{value:"Timelock",id:"timelock",children:[],level:3}],level:2},{value:"Notes",id:"notes",children:[],level:2},{value:"How Does It Work for ISCP?",id:"how-does-it-work-for-iscp",children:[],level:2},{value:"Additional Use Cases",id:"additional-use-cases",children:[{value:"Delegated Keys",id:"delegated-keys",children:[],level:3},{value:"Non-Fungible Tokens",id:"non-fungible-tokens",children:[],level:3}],level:2},{value:"GoShimmer Implementation",id:"goshimmer-implementation",children:[],level:2}],d={toc:u};function p(e){var t=e.components,r=(0,o.Z)(e,l);return(0,i.kt)("wrapper",(0,a.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"utxo-output-types"},"UTXO Output Types"),(0,i.kt)("h2",{id:"motivation"},"Motivation"),(0,i.kt)("p",null,"In the previous ",(0,i.kt)("a",{parentName:"p",href:"/goshimmer/protocol_specification/components/ledgerstate"},"section")," two basic output types were introduced that enable the use of the UTXO ledger\nas a payment application between addresses. Each ",(0,i.kt)("inlineCode",{parentName:"p"},"SigLockedSingleOutput")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"SigLockedAssetOutput")," encodes a list of\nbalances and an address in the output. The output can be unlocked by providing a valid signature for the address, hence\nonly the owner of the address can initiate a payment."),(0,i.kt)("p",null,"While these two output types provide the basic functionality for a cryptocurrency application, IOTA aims to strive\nfor more. The first and foremost application the UTXO ledger should support besides payments is the IOTA Smart Contract\nProtocol (ISCP). Due to the lack of total ordering of the Tangle (that is a direct result of the scalable, parallel\narchitecture), it is not possible to implement Turing-complete smart contracts directly on layer 1. Therefore,\nIOTA aims to develop a layer 2 protocol called ISCP for smart contracts."),(0,i.kt)("p",null,"After carefully evaluating the proposed architecture of ISCP and the required properties of the layer 2 protocol, we\ncame up with special types of outputs for layer 1 UTXO support: ",(0,i.kt)("inlineCode",{parentName:"p"},"AliasOutput")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"ExtendedLockedOutput"),".\nThese output types are experimental: the IOTA 2.0 DevNet serves as their testing ground. Bear in mind that there is no\nguarantee that they will not change as the protocol evolves."),(0,i.kt)("p",null,"It will be demonstrated later that these outputs can also be used for enhanced cryptocurrency payment application, such\nas conditional payments or time locked sending, but also open up the world of native non-fungible tokens (NFTs)."),(0,i.kt)("h2",{id:"functional-requirements-of-iscp"},"Functional Requirements of ISCP"),(0,i.kt)("p",null,"Designing the output types starts with a proper requirement analysis. Below you can read the summary of the functional\nrequirements imposed by the layer 2 smart contract protocol. You can read more about ISCP\n",(0,i.kt)("a",{parentName:"p",href:"https://blog.iota.org/an-introduction-to-iota-smart-contracts-16ea6f247936/"},"here"),",\n",(0,i.kt)("a",{parentName:"p",href:"https://blog.iota.org/iota-smart-contracts-protocol-alpha-release/"},"here"),"\nor check out this ",(0,i.kt)("a",{parentName:"p",href:"https://youtu.be/T1CJFr6gz8I"},"presentation"),"."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Smart contract chains need a globally unique account in the UTXO ledger, that does not change if the controlling entities changes."),(0,i.kt)("li",{parentName:"ul"},"An account state is identified by balances and state metadata."),(0,i.kt)("li",{parentName:"ul"},"Two levels of control: ",(0,i.kt)("strong",{parentName:"li"},"state controller")," and ",(0,i.kt)("strong",{parentName:"li"},"governance controller"),"."),(0,i.kt)("li",{parentName:"ul"},"State controller can change state metadata (state transition) and balance (min required)."),(0,i.kt)("li",{parentName:"ul"},"Governance controller can change state controller and governance controller."),(0,i.kt)("li",{parentName:"ul"},"An account shall have only one valid state in the ledger."),(0,i.kt)("li",{parentName:"ul"},"Smart contract chain state transitions are triggered by requests in the ledger."),(0,i.kt)("li",{parentName:"ul"},"A request is a ledger entity belonging to the account with tokens and data."),(0,i.kt)("li",{parentName:"ul"},"The account can identify and control requests."),(0,i.kt)("li",{parentName:"ul"},"Fallback mechanism needs to be in place in case the requests are not picked up."),(0,i.kt)("li",{parentName:"ul"},"When request is completed in a state transition, it should be atomically removed from the ledger.")),(0,i.kt)("h2",{id:"output-design"},"Output Design"),(0,i.kt)("h3",{id:"introducing-alias-account"},"Introducing Alias Account"),(0,i.kt)("p",null,"Previously, the account concept in the ledger was realized with cryptographic entities called addresses, that are backed\nby public and private key pairs. Addresses are present in the ledger through outputs and define who can spend this\noutput by providing a digital signature."),(0,i.kt)("p",null,"Addresses are not able to provide the necessary functionality needed for smart contract chain accounts, because:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"addresses change with the rotation of the controlling body (committee),"),(0,i.kt)("li",{parentName:"ul"},"and there is no notion of separate control levels for an address account.")),(0,i.kt)("p",null,"We define a new account type in the ledger, called ",(0,i.kt)("strong",{parentName:"p"},"Alias"),", to represent smart contract chain accounts. An alias\naccount can hold token balances, but also has state metadata, which stores the state of the smart contract chain.\nThe alias account defines two to controlling entities: a state controller and a governance controller. The state\ncontroller can transition the account into a new state, and can manipulate account balances. The governance controller\ncan change the state controller or the governance controller."),(0,i.kt)("p",null,"An alias is not a cryptographic entity, but it is controlled via either regular addresses or other aliases."),(0,i.kt)("h3",{id:"representing-a-smart-contract-chain-account-in-ledger"},"Representing a Smart Contract Chain Account in Ledger"),(0,i.kt)("p",null,"An alias is translated into the ledger as a distinct output type, called ",(0,i.kt)("strong",{parentName:"p"},"AliasOutput"),". The output contains:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"the unique identifier of the alias, called ",(0,i.kt)("strong",{parentName:"li"},"AliasID"),","),(0,i.kt)("li",{parentName:"ul"},"the ",(0,i.kt)("strong",{parentName:"li"},"State Controller")," entity,"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"State Metadata"),","),(0,i.kt)("li",{parentName:"ul"},"the ",(0,i.kt)("strong",{parentName:"li"},"Governance Controller"),","),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Governance Metadata"),","),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Immutable Metadata"),","),(0,i.kt)("li",{parentName:"ul"},"and token ",(0,i.kt)("strong",{parentName:"li"},"balances"),".")),(0,i.kt)("p",null,"The state controller and governance controller entities can either be private key backed addresses (cryptographic\nentities) or ",(0,i.kt)("inlineCode",{parentName:"p"},"AliasAddress"),", that is the unique identifier of another alias. Note, that an alias cannot be controlled by\nits own ",(0,i.kt)("inlineCode",{parentName:"p"},"aliasID"),"."),(0,i.kt)("p",null,"An alias output itself can be regarded as a non-fungible token with a unique identifier ",(0,i.kt)("inlineCode",{parentName:"p"},"aliasID"),", metadata and token\nbalances. An NFT that can hold tokens, can control its metadata and has a governance model."),(0,i.kt)("p",null,"Alias output can be created in a transaction that spends the minimum required amount of tokens into a freshly created\nalias output. The new transaction output specifies the state and governance controller next to the balances, but aliasID\nis assigned by the protocol once the transaction is processed. Once the output is booked, aliasID becomes the hash of\nthe outputID that created it."),(0,i.kt)("p",null,"An alias output can only be destroyed by the governance controller by simply consuming it as an input but not creating\na corresponding output in the transaction."),(0,i.kt)("p",null,"The alias account is transitioned into a new state by spending its alias output in a transaction and creating an\nupdated alias output with the same aliasID. Depending on what unlocking conditions are met, there are certain\nrestrictions on how the newly created alias output can look like."),(0,i.kt)("h3",{id:"consuming-an-alias-output"},"Consuming an Alias Output"),(0,i.kt)("p",null,"As mentioned above, an alias output can be unlocked by both the state controller and the governance controller."),(0,i.kt)("h4",{id:"unlocking-via-state-controller"},"Unlocking via State Controller"),(0,i.kt)("p",null,"When the state controller is an address, the alias output is unlocked by providing a signature of the state controller\naddress in the output that signs the essence of the transaction. When state controller is another alias, unlocking is\ndone by providing a reference to the state controller unlocked other alias within the transaction."),(0,i.kt)("p",null,"When an alias output is unlocked as input in a transaction by the state controller, the transaction must contain a\ncorresponding alias output. Only the state metadata and the token balances of the alias output are allowed to change,\nand token balances must be at least a protocol defined constant."),(0,i.kt)("h4",{id:"unlocking-via-governance-controller"},"Unlocking via governance controller"),(0,i.kt)("p",null,"The governance controller is either an address, or another alias. In the former case, unlocking is done via the regular\nsignature. In the latter case, unlocking is done by providing a reference to the unlocked governance alias within the\ntransaction."),(0,i.kt)("p",null,"When an alias output is unlocked as input by the governance controller, the transaction doesn't need to have a\ncorresponding output. If there is no such output in the transaction, the alias is destroyed. If however the output\nis present, only the state and governance controller fields are allowed to be changed."),(0,i.kt)("p",null,"A governance controller therefore can:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"destroy the alias all together,"),(0,i.kt)("li",{parentName:"ul"},"assign the state controller of the alias,"),(0,i.kt)("li",{parentName:"ul"},"assign the governance controller of the alias.")),(0,i.kt)("h2",{id:"locking-funds-into-aliases"},"Locking Funds Into Aliases"),(0,i.kt)("p",null,"Address accounts in the ledger can receive funds by the means of signature locking. Outputs specify an address field,\nwhich essentially gives the control of the funds of the output to the owner of the address account, the holder of the\ncorresponding private key."),(0,i.kt)("p",null,"In order to make alias accounts (smart contract chains) able to receive funds, we need to define a new fund locking\nmechanism, called alias locking. An alias locked output can be unlocked by unlocking the given alias output for\nstate transition in the very same transaction."),(0,i.kt)("p",null,"An alias account (smart contract chain) can receive funds now, but there are additional requirements to be satisfied\nfor smart contracts:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Alias locked outputs represent smart contract requests, and hence, need to contain metadata that is interpreted on\nlayer 2."),(0,i.kt)("li",{parentName:"ul"},"A dormant smart contract chain might never consume alias locked outputs, therefore, there needs to be a fallback\nmechanism for the user to reclaim the funds locked into the request."),(0,i.kt)("li",{parentName:"ul"},"Requests might be scheduled by the user by specifying a time locking condition on the output. The output can not be\nspent before the time locking period expires.")),(0,i.kt)("p",null,"As we can see, there are couple new concepts regarding outputs that we need to support for the smart contract use case:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"alias locking")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"metadata tied to output")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"fallback unlocking mechanism")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"time locking"))),(0,i.kt)("p",null,"In the next section, we are going to design an ",(0,i.kt)("strong",{parentName:"p"},"Extended Output")," model that can support these concepts."),(0,i.kt)("h2",{id:"extended-output"},"Extended Output"),(0,i.kt)("p",null,"An extended output is an output that supports alias locking, output metadata, fallback unlocking mechanisms and time\nlocking. The structure of an extended output is as follows:"),(0,i.kt)("p",null,"Extended Output:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"AliasID"),": the alias account that is allowed to unlock this output."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Token Balances"),": tokens locked by the output."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Metadata"),": optional, bounded size binary data."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"FallbackAccount"),": an alias or address that can unlock the output after ",(0,i.kt)("strong",{parentName:"li"},"FallbackDeadline"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"FallbackDeadline"),": a point in time after which the output might be unlocked by ",(0,i.kt)("strong",{parentName:"li"},"FallbackAccount"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Timelock")," (Optional): a point in time. When present, the output can not be unlocked before.")),(0,i.kt)("h3",{id:"unlocking-via-aliasid"},"Unlocking via AliasID"),(0,i.kt)("p",null,"The extended output can be unlocked by unlocking the alias output with aliasID by the state controller within the same\ntransaction. The unlock block of an extended output then references the unlock block of the corresponding alias output."),(0,i.kt)("p",null,"Aliases abstract away the underlying address of a smart contract committee, so when a committee is rotated, ",(0,i.kt)("inlineCode",{parentName:"p"},"aliasID"),"\nstays the same, but the address where the alias points to can be changed."),(0,i.kt)("p",null,"It is trivial then to define the unique account of a smart contract on layer 1 as the ",(0,i.kt)("inlineCode",{parentName:"p"},"aliasID"),", however, a new locking\nmechanism is needed on the UTXO layer to be able to tie funds to an alias."),(0,i.kt)("p",null,"Previously, only addresses defined accounts in the protocol. Funds can be locked into addresses, and a signature of the\nrespective address has to be provided in the transaction to spend funds the account."),(0,i.kt)("p",null,"With the help of aliases, it is possible to extend the capabilities of the protocol to support locking funds into\naliases. This is what we call alias locking. An alias locked output specifies an ",(0,i.kt)("inlineCode",{parentName:"p"},"aliasID")," that can spend the funds\nfrom this output. The owner of the alias account can spend aforementioned alias locked outputs by unlocking/moving the\nalias in the very same transaction. We will use the term ",(0,i.kt)("inlineCode",{parentName:"p"},"ExtendedLockedOutput")," for outputs that support alias locking."),(0,i.kt)("p",null,"Let's illustrate this through a simple example. Alice wants to send 10 Mi to Bob's alias account. Bob then wants to\nspend the 10 Mi from his alias account to his address account."),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Bob creates an alias where ",(0,i.kt)("inlineCode",{parentName:"li"},"aliasID=BobAliasID")," with Transaction A.")),(0,i.kt)("p",null,(0,i.kt)("a",{target:"_blank",href:n(38970).Z},(0,i.kt)("img",{alt:"Bob creates an alias",src:n(27577).Z,title:"Bob creates an alias"}))),(0,i.kt)("ol",{start:2},(0,i.kt)("li",{parentName:"ol"},"Bob shares ",(0,i.kt)("inlineCode",{parentName:"li"},"BobAliasID")," with Alice."),(0,i.kt)("li",{parentName:"ol"},"Alice sends 10 Mi to Bob by sending Transaction B that creates an ",(0,i.kt)("inlineCode",{parentName:"li"},"ExtendedLockedOutput"),", specifying the balance,\nand ",(0,i.kt)("inlineCode",{parentName:"li"},"aliasID=BobAliasID"),".")),(0,i.kt)("p",null,(0,i.kt)("a",{target:"_blank",href:n(98049).Z},(0,i.kt)("img",{alt:"Alice sends 10 Mi to Bob",src:n(74703).Z,title:"Alice sends 10 Mi to Bob"}))),(0,i.kt)("ol",{start:4},(0,i.kt)("li",{parentName:"ol"},"Bob can spend the outputs created by Alice by creating Transaction C that moves his ",(0,i.kt)("inlineCode",{parentName:"li"},"BobAlias")," (to the very same\naddress), and including the  ",(0,i.kt)("inlineCode",{parentName:"li"},"ExtendedLockedOutput")," with ",(0,i.kt)("inlineCode",{parentName:"li"},"aliasID=BobAliasID"),".")),(0,i.kt)("p",null,(0,i.kt)("a",{target:"_blank",href:n(19857).Z},(0,i.kt)("img",{alt:"Bob can spend the outputs created by Alice by creating Transaction C",src:n(82594).Z,title:"Bob can spend the outputs created by Alice by creating Transaction C"}))),(0,i.kt)("p",null,'In a simple scenario, a user wishing to send a request to a smart contract creates an extended output. The output\ncontains the AliasID of the smart contract chain account, the layer 2 request as metadata, and some tokens to pay\nfor the request. Once the transaction is confirmed, the smart contract chain account "receives" the output. It\ninterprets the request metadata, carries out the requested operation in its chain, and submits a transaction that\ncontains the updated smart contract chain state (alias output), and also spends the extended output to increase\nthe balance of its alias output.'),(0,i.kt)("p",null,"What happens when the smart contract chain goes offline or dies completely? How do we prevent the extended output to\nbe lost forever?"),(0,i.kt)("h3",{id:"unlocking-via-fallback"},"Unlocking via Fallback"),(0,i.kt)("p",null,"Extended outputs can also define a fallback account and a fallback deadline. After the fallback deadline, only the\nfallback account is authorized to unlock the extended output. Fallback deadline cannot be smaller than a protocol\nwide constant to give enough time to the smart contract chain to pick up the request."),(0,i.kt)("p",null,"Fallback unlocking can either be done via signature unlocking or alias unlocking, depending on the type  of account\nspecified."),(0,i.kt)("h3",{id:"timelock"},"Timelock"),(0,i.kt)("p",null,"Timelocking outputs is a desired operation not only for smart contracts, but for other use cases as well. A user might\nfor example scheduled a request to a smart contract chain at a later point in time by timelocking the extended output\nfor a certain period."),(0,i.kt)("p",null,"Timelocks can be implemented quite easily if transactions have enforced timestamps: the output can not be unlocked if\nthe transaction timestamp is before the timelock specified in the output."),(0,i.kt)("h2",{id:"notes"},"Notes"),(0,i.kt)("p",null,"One of the most important change that the new output types imply is that checking the validity of an unlock block of a\ncertain consumed input has to be done in the context of the transaction. Previously, an unlock block was valid if the\nprovided signature was valid. Now, even if the signature is valid for an alias output unlocked for state transition,\nadditional constraints also have to be met."),(0,i.kt)("h2",{id:"how-does-it-work-for-iscp"},"How Does It Work for ISCP?"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"The new output types are completely orthogonal to colored coins, ISCP will not rely on them anymore."),(0,i.kt)("li",{parentName:"ul"},"The Alias output functions as a chain constraint to allow building a non-forkable chain of transactions in the\nledger by the state controller. The alias output holds tokens, that are the balance of the smart contract chain.\nThe hash of the smart contract chain state is stored in the alias output, registering each state transition as a\ntransaction on the ledger."),(0,i.kt)("li",{parentName:"ul"},"The governance controller of an alias output can change the state controller, meaning that a committee rotation can\nbe carried out without changing the smart contract chain account, aliasID.",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"A smart contract chain can be self governed, if the state and governance controllers coincide."),(0,i.kt)("li",{parentName:"ul"},"A smart contract chain can be governed by an address account, or by another smart contract chain through an\nalias account."))),(0,i.kt)("li",{parentName:"ul"},"Each Extended Output is a request which is \u201csent\u201d to the alias account. The ISCP can retrieve the backlog of\nrequests by retrieving all outputs for the aliasID. Consuming the Extended Output means it is atomically removed\nfrom the backlog. It can only be done by the state controller, i.e. the committee of the smart contract chain."),(0,i.kt)("li",{parentName:"ul"},"Fallback parameters prevent from losing funds if the committee is inactive for some timeout. After timeout the\nExtended Output can be unlocked by FallbackAccount, an address or another alias.")),(0,i.kt)("h2",{id:"additional-use-cases"},"Additional Use Cases"),(0,i.kt)("h3",{id:"delegated-keys"},"Delegated Keys"),(0,i.kt)("p",null,"An alias output is controlled by two parties: the state controller and the governance controller. The state controller\ncan only change the state metadata and the tokens when spending the output, therefore it only has the right to move the\nalias to the very same account in a transaction. The governance controller however can change the state controller, or\ndestroy the alias and hence release the funds locked into it."),(0,i.kt)("p",null,"This makes it an ideal candidate for mana delegation, that is a crucial part of a mana marketplace. In Coordidice,\nmoving funds generate access and consensus mana. Alias outputs make it possible to delegate the right to move funds\nwithout losing control over them."),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"An account owning funds create an alias output and locks funds into it. The governance controller of the alias output\nshall be ",(0,i.kt)("inlineCode",{parentName:"li"},"ownAccount"),"."),(0,i.kt)("li",{parentName:"ol"},"An entity in need of mana generated by the locked funds can purchase the right from the governance controller to\nmove the alias output, generating mana."),(0,i.kt)("li",{parentName:"ol"},"Once purchased, the governance controller updates the alias output by specifying the state controller to be\n",(0,i.kt)("inlineCode",{parentName:"li"},"buyerAccount"),"."),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"buyerAccount")," now can move the alias output, but only to its own account. Each move generates (access) mana."),(0,i.kt)("li",{parentName:"ol"},"Since ",(0,i.kt)("inlineCode",{parentName:"li"},"ownAccount")," is the governance controller, it can revoke ",(0,i.kt)("inlineCode",{parentName:"li"},"buyerAccount"),"'s state controlling right at any point\nin time."),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"ownAccount"),' can also destroy the alias and "free" the locked funds.')),(0,i.kt)("p",null,"Notes:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"The state controller can redeem funds from the alias output up to the point where only ",(0,i.kt)("inlineCode",{parentName:"li"},"minimum allowed amount")," is\npresent in the alias output. Therefore, without additional mechanism, it would only make sense to lock\n",(0,i.kt)("inlineCode",{parentName:"li"},"minimum allowed amount")," into an alias by the governance controller. This is obviously a drawback, users should not\nbe restricted in how many funds they would like to delegate."),(0,i.kt)("li",{parentName:"ul"},"A governance controller can destroy the alias output at any time, which is not desired from the buyer perspective.\nThe buyer should be able to buy the right to move the funds for a pre-defined amount of time.")),(0,i.kt)("p",null,"To solve above problems, the ",(0,i.kt)("inlineCode",{parentName:"p"},"AliasOutput")," currently implemented in GoShimmer supports the delegation use case by\nintroducing two new fields in the output:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"isDelegated")," and"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"delegationTimelock"),".")),(0,i.kt)("p",null,"When an alias is delegated, the state controller cannot modify token balances, and the governor can destroy the\noutput with any balance. However, when delegation time lock is present, the governor is not allowed to unlock the\noutput until the delegation time expires."),(0,i.kt)("h3",{id:"non-fungible-tokens"},"Non-Fungible Tokens"),(0,i.kt)("p",null,"NFTs are unique tokens that have metadata attached to them. Since an AliasOutput implements a chain constraint in the\nUTXO ledger, it is perfectly suited to represent NFTs. The unique identifier of the NFT is the ",(0,i.kt)("inlineCode",{parentName:"p"},"aliasID")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"AliasAddress"),".\nThe ",(0,i.kt)("inlineCode",{parentName:"p"},"Immutable Data")," field of the output can only be defined upon creation and can't be changed afterwards, therefore\nit is perfect to store metadata belonging to the NFT."),(0,i.kt)("p",null,"The ID of an IOTA NFT is also a valid address, therefore the NFT itself can receive and manage funds and other NFTs as\nwell. Refer to the ",(0,i.kt)("a",{parentName:"p",href:"/goshimmer/tutorials/wallet_library"},"cli-wallet tutorial")," for an overview of what you can do with an NFT."),(0,i.kt)("p",null,"Interestingly, minting an IOTA NFT costs you only the minimum required deposit balance (0.0001 MI at the moment), which\nyou can take back when you destroy the NFT. This is required so that NFTs are not minted out of thin air, and there are\nsome IOTAs backing the output. Otherwise, the ledger database could be easily spammed.\nTransferring NFTs is also feeless, just like any other transaction in IOTA."),(0,i.kt)("h2",{id:"goshimmer-implementation"},"GoShimmer Implementation"),(0,i.kt)("p",null,"If you are interested, you can find the GoShimmer implementation of the new ouput types in\n",(0,i.kt)("a",{parentName:"p",href:"https://github.com/iotaledger/goshimmer/blob/master/packages/ledgerstate/output.go"},"output.go"),":"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/iotaledger/goshimmer/blob/master/packages/ledgerstate/output.go#L947"},"AliasOutput")," and"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/iotaledger/goshimmer/blob/master/packages/ledgerstate/output.go#L1840"},"ExtendedLockedOutput"))))}p.isMDXComponent=!0},3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return h}});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,u=r(e,["components","mdxType","originalType","parentName"]),p=c(n),h=o,m=p["".concat(s,".").concat(h)]||p[h]||d[h]||i;return n?a.createElement(m,l(l({ref:t},u),{},{components:n})):a.createElement(m,l({ref:t},u))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,l=new Array(i);l[0]=p;var r={};for(var s in t)hasOwnProperty.call(t,s)&&(r[s]=t[s]);r.originalType=e,r.mdxType="string"==typeof e?e:o,l[1]=r;for(var c=2;c<i;c++)l[c]=n[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},98049:function(e,t,n){t.Z=n.p+"assets/files/alice_sends_10_mi-fae374f2f279915ca00b1e941f886406.png"},38970:function(e,t,n){t.Z=n.p+"assets/files/bob_alias-2b8903e0a4d7f6141a36d05e3887e636.png"},19857:function(e,t,n){t.Z=n.p+"assets/files/bob_can_spend_outputs_created_by_alice-95640050f296884898785699f4962795.png"},74703:function(e,t,n){t.Z=n.p+"assets/images/alice_sends_10_mi-fae374f2f279915ca00b1e941f886406.png"},27577:function(e,t,n){t.Z=n.p+"assets/images/bob_alias-2b8903e0a4d7f6141a36d05e3887e636.png"},82594:function(e,t,n){t.Z=n.p+"assets/images/bob_can_spend_outputs_created_by_alice-95640050f296884898785699f4962795.png"}}]);