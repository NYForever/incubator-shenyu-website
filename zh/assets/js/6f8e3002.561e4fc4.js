"use strict";(self.webpackChunkshenyu_website=self.webpackChunkshenyu_website||[]).push([[7518],{3905:function(n,e,a){a.d(e,{Zo:function(){return m},kt:function(){return y}});var t=a(67294);function o(n,e,a){return e in n?Object.defineProperty(n,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):n[e]=a,n}function s(n,e){var a=Object.keys(n);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(n);e&&(t=t.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),a.push.apply(a,t)}return a}function l(n){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?s(Object(a),!0).forEach((function(e){o(n,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(a,e))}))}return n}function r(n,e){if(null==n)return{};var a,t,o=function(n,e){if(null==n)return{};var a,t,o={},s=Object.keys(n);for(t=0;t<s.length;t++)a=s[t],e.indexOf(a)>=0||(o[a]=n[a]);return o}(n,e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(n);for(t=0;t<s.length;t++)a=s[t],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(n,a)&&(o[a]=n[a])}return o}var i=t.createContext({}),p=function(n){var e=t.useContext(i),a=e;return n&&(a="function"==typeof n?n(e):l(l({},e),n)),a},m=function(n){var e=p(n.components);return t.createElement(i.Provider,{value:e},n.children)},u={inlineCode:"code",wrapper:function(n){var e=n.children;return t.createElement(t.Fragment,{},e)}},c=t.forwardRef((function(n,e){var a=n.components,o=n.mdxType,s=n.originalType,i=n.parentName,m=r(n,["components","mdxType","originalType","parentName"]),c=p(a),y=o,d=c["".concat(i,".").concat(y)]||c[y]||u[y]||s;return a?t.createElement(d,l(l({ref:e},m),{},{components:a})):t.createElement(d,l({ref:e},m))}));function y(n,e){var a=arguments,o=e&&e.mdxType;if("string"==typeof n||o){var s=a.length,l=new Array(s);l[0]=c;var r={};for(var i in e)hasOwnProperty.call(e,i)&&(r[i]=e[i]);r.originalType=n,r.mdxType="string"==typeof n?n:o,l[1]=r;for(var p=2;p<s;p++)l[p]=a[p];return t.createElement.apply(null,l)}return t.createElement.apply(null,a)}c.displayName="MDXCreateElement"},72491:function(n,e,a){a.r(e),a.d(e,{frontMatter:function(){return r},contentTitle:function(){return i},metadata:function(){return p},toc:function(){return m},default:function(){return c}});var t=a(87462),o=a(63366),s=(a(67294),a(3905)),l=["components"],r={sidebar_position:4,title:"k8s\u90e8\u7f72",keywords:["k8s"],description:"k8s\u90e8\u7f72"},i=void 0,p={unversionedId:"deployment/deployment-k8s",id:"version-2.4.2/deployment/deployment-k8s",isDocsHomePage:!1,title:"k8s\u90e8\u7f72",description:"k8s\u90e8\u7f72",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-2.4.2/deployment/deployment-k8s.md",sourceDirName:"deployment",slug:"/deployment/deployment-k8s",permalink:"/zh/docs/deployment/deployment-k8s",editUrl:"https://github.com/apache/incubator-shenyu-website/edit/main/i18n/zh/docusaurus-plugin-content-docs/version-2.4.2/deployment/deployment-k8s.md",version:"2.4.2",sidebarPosition:4,frontMatter:{sidebar_position:4,title:"k8s\u90e8\u7f72",keywords:["k8s"],description:"k8s\u90e8\u7f72"},sidebar:"version-2.4.2/tutorialSidebar",previous:{title:"Docker\u90e8\u7f72",permalink:"/zh/docs/deployment/deployment-docker"},next:{title:"Helm\u90e8\u7f72",permalink:"/zh/docs/deployment/deployment-helm"}},m=[{value:"\u4e00. \u4f7f\u7528 h2 \u4f5c\u4e3a\u6570\u636e\u5e93",id:"\u4e00-\u4f7f\u7528-h2-\u4f5c\u4e3a\u6570\u636e\u5e93",children:[{value:"1. \u521b\u5efa nameSpace \u548c configMap",id:"1-\u521b\u5efa-namespace-\u548c-configmap",children:[]},{value:"2. \u90e8\u7f72 shenyu-admin",id:"2-\u90e8\u7f72-shenyu-admin",children:[]},{value:"3. \u90e8\u7f72 shenyu-bootstrap",id:"3-\u90e8\u7f72-shenyu-bootstrap",children:[]}]},{value:"\u4e8c. \u4f7f\u7528 mysql \u4f5c\u4e3a\u6570\u636e\u5e93",id:"\u4e8c-\u4f7f\u7528-mysql-\u4f5c\u4e3a\u6570\u636e\u5e93",children:[{value:"1. \u521b\u5efa nameSpace\u548c configMap",id:"1-\u521b\u5efa-namespace\u548c-configmap",children:[]},{value:"2. \u521b\u5efa endpoint \u4ee3\u7406\u5916\u90e8 mysql",id:"2-\u521b\u5efa-endpoint-\u4ee3\u7406\u5916\u90e8-mysql",children:[]},{value:"3. \u521b\u5efa pv \u5b58\u50a8 mysql-connector.jar",id:"3-\u521b\u5efa-pv-\u5b58\u50a8-mysql-connectorjar",children:[]},{value:"4. \u90e8\u7f72 shenyu-admin",id:"4-\u90e8\u7f72-shenyu-admin",children:[]},{value:"3. \u90e8\u7f72 shenyu-bootstrap",id:"3-\u90e8\u7f72-shenyu-bootstrap-1",children:[]}]}],u={toc:m};function c(n){var e=n.components,a=(0,o.Z)(n,l);return(0,s.kt)("wrapper",(0,t.Z)({},u,a,{components:e,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"\u672c\u6587\u4ecb\u7ecd\u4f7f\u7528 ",(0,s.kt)("inlineCode",{parentName:"p"},"k8s")," \u6765\u90e8\u7f72 ",(0,s.kt)("inlineCode",{parentName:"p"},"Apache ShenYu")," \u7f51\u5173\u3002"),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"},"\u76ee\u5f55"),(0,s.kt)("p",{parentName:"blockquote"},"\u4e00. \u4f7f\u7528 h2 \u4f5c\u4e3a\u6570\u636e\u5e93"),(0,s.kt)("pre",{parentName:"blockquote"},(0,s.kt)("code",{parentName:"pre"},"1. \u521b\u5efa nameSpace\u548c configMap\n2. \u90e8\u7f72 shenyu-admin\n3. \u90e8\u7f72 shenyu-bootstrap\n")),(0,s.kt)("p",{parentName:"blockquote"},"\u4e8c. \u4f7f\u7528 mysql \u4f5c\u4e3a\u6570\u636e\u5e93"),(0,s.kt)("pre",{parentName:"blockquote"},(0,s.kt)("code",{parentName:"pre"},"\u548c h2 \u8fc7\u7a0b\u7c7b\u4f3c\uff0c\u9700\u8981\u6ce8\u610f\u7684\u4e24\u4e2a\u5730\u65b9\n\n1. \u9700\u8981\u52a0\u8f7d mysql-connector.jar\uff0c\u6240\u4ee5\u9700\u8981\u4e00\u4e2a\u6587\u4ef6\u5b58\u50a8\u7684\u5730\u65b9\n2. \u9700\u8981\u6307\u5b9a\u5916\u90e8 mysql \u6570\u636e\u5e93\u914d\u7f6e\uff0c\u901a\u8fc7 endpoint \u6765\u4ee3\u7406\u5916\u90e8 mysql \u6570\u636e\u5e93\n\n\u5177\u4f53\u6d41\u7a0b\u5982\u4e0b\uff1a\n\n1. \u521b\u5efa nameSpace\u548c configMap\n2. \u521b\u5efa endpoint \u4ee3\u7406\u5916\u90e8 mysql\n3. \u521b\u5efa pv \u5b58\u50a8 mysql-connector.jar\n4. \u90e8\u7f72 shenyu-admin\n5. \u90e8\u7f72 shenyu-bootstrap\n"))),(0,s.kt)("h2",{id:"\u4e00-\u4f7f\u7528-h2-\u4f5c\u4e3a\u6570\u636e\u5e93"},"\u4e00. \u4f7f\u7528 h2 \u4f5c\u4e3a\u6570\u636e\u5e93"),(0,s.kt)("h3",{id:"1-\u521b\u5efa-namespace-\u548c-configmap"},"1. \u521b\u5efa nameSpace \u548c configMap"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"\u521b\u5efa\u6587\u4ef6 shenyu-ns.yaml")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: v1\nkind: Namespace\nmetadata:\n  name: shenyu\n  labels:\n    name: shenyu\n---\napiVersion: v1\nkind: ConfigMap\nmetadata:\n  name: shenyu-cm\n  namespace: shenyu\ndata:\n  application-local.yml: |\n    server:\n        port: 9195\n        address: 0.0.0.0\n    spring:\n        main:\n            allow-bean-definition-overriding: true\n        application:\n            name: shenyu-bootstrap\n    management:\n        health:\n            defaults:\n            enabled: false\n    shenyu:\n        local:\n            enabled: true\n        file:\n            enabled: true\n        cross:\n            enabled: true\n        dubbo:\n            parameter: multi\n        sync:\n            websocket:\n            urls: ws://shenyu-admin-svc.shenyu.svc.cluster.local:9095/websocket\n        exclude:\n            enabled: false\n            paths:\n            - /favicon.ico\n        extPlugin:\n            enabled: true\n            threads: 1\n            scheduleTime: 300\n            scheduleDelay: 30\n        scheduler:\n            enabled: false\n            type: fixed\n            threads: 16\n    logging:\n        level:\n            root: info\n            org.springframework.boot: info\n            org.apache.ibatis: info\n            org.apache.shenyu.bonuspoint: info\n            org.apache.shenyu.lottery: info\n            org.apache.shenyu: info\n")),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"\u6267\u884c ",(0,s.kt)("inlineCode",{parentName:"li"},"kubectl apply -f shenyu-ns.yaml"))),(0,s.kt)("h3",{id:"2-\u90e8\u7f72-shenyu-admin"},"2. \u90e8\u7f72 shenyu-admin"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"\u521b\u5efa\u6587\u4ef6 shenyu-admin.yaml")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-yaml"},"# \u793a\u4f8b\u4f7f\u7528 nodeport \u65b9\u5f0f\u66b4\u9732\u7aef\u53e3\napiVersion: v1\nkind: Service\nmetadata:\n  namespace: shenyu\n  name: shenyu-admin-svc\nspec:\n  selector:\n    app: shenyu-admin\n  type: NodePort\n  ports:\n  - protocol: TCP\n    port: 9095\n    targetPort: 9095\n    nodePort: 31095\n---\n# shenyu-admin\napiVersion: apps/v1\nkind: Deployment\nmetadata:\n  namespace: shenyu\n  name: shenyu-admin\nspec:\n  selector:\n    matchLabels:\n      app: shenyu-admin\n  replicas: 1\n  template:\n    metadata:\n      labels:\n        app: shenyu-admin\n    spec:\n      containers:\n      - name: shenyu-admin\n        image: apache/shenyu-admin:2.4.2\n        imagePullPolicy: Always\n        ports:\n        - containerPort: 9095\n        env:\n        - name: 'TZ'\n          value: 'Asia/Beijing'\n")),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"\u6267\u884c",(0,s.kt)("inlineCode",{parentName:"li"},"kubectl apply -f shenyu-admin.yaml"))),(0,s.kt)("h3",{id:"3-\u90e8\u7f72-shenyu-bootstrap"},"3. \u90e8\u7f72 shenyu-bootstrap"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"\u521b\u5efa\u6587\u4ef6 shenyu-bootstrap.yaml")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-yaml"},"# \u793a\u4f8b\u4f7f\u7528 nodeport \u65b9\u5f0f\u66b4\u9732\u7aef\u53e3\napiVersion: v1\nkind: Service\nmetadata:\n  namespace: shenyu\n  name: shenyu-bootstrap-svc\nspec:\n  selector:\n    app: shenyu-bootstrap\n  type: NodePort\n  ports:\n  - protocol: TCP\n    port: 9195\n    targetPort: 9195\n    nodePort: 31195\n---\n# shenyu-bootstrap\napiVersion: apps/v1\nkind: Deployment\nmetadata:\n  namespace: shenyu\n  name: shenyu-bootstrap\nspec:\n  selector:\n    matchLabels:\n      app: shenyu-bootstrap\n  replicas: 1\n  template:\n    metadata:\n      labels:\n        app: shenyu-bootstrap\n    spec:\n      volumes:\n      - name: shenyu-bootstrap-config\n        configMap:\n          name: shenyu-cm\n          items:\n          - key: application-local.yml\n            path: application-local.yml\n      containers:\n      - name: shenyu-bootstrap\n        image: apache/shenyu-bootstrap:2.4.2\n        ports:\n        - containerPort: 9195\n        env:\n        - name: TZ\n          value: Asia/Beijing\n        volumeMounts:\n        - name: shenyu-bootstrap-config\n          mountPath: /opt/shenyu-bootstrap/conf/application-local.yml\n          subPath: application-local.yml\n")),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"\u6267\u884c ",(0,s.kt)("inlineCode",{parentName:"li"},"kubectl apply -f shenyu-bootstrap.yaml"))),(0,s.kt)("h2",{id:"\u4e8c-\u4f7f\u7528-mysql-\u4f5c\u4e3a\u6570\u636e\u5e93"},"\u4e8c. \u4f7f\u7528 mysql \u4f5c\u4e3a\u6570\u636e\u5e93"),(0,s.kt)("h3",{id:"1-\u521b\u5efa-namespace\u548c-configmap"},"1. \u521b\u5efa nameSpace\u548c configMap"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"\u521b\u5efa\u6587\u4ef6 shenyu-ns.yaml")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: v1\nkind: Namespace\nmetadata:\n  name: shenyu\n  labels:\n    name: shenyu\n---\napiVersion: v1\nkind: ConfigMap\nmetadata:\n  name: shenyu-cm\n  namespace: shenyu\ndata:\n  application-local.yml: |\n    server:\n        port: 9195\n        address: 0.0.0.0\n    spring:\n        main:\n            allow-bean-definition-overriding: true\n        application:\n            name: shenyu-bootstrap\n    management:\n        health:\n            defaults:\n            enabled: false\n    shenyu:\n        local:\n            enabled: true\n        file:\n            enabled: true\n        cross:\n            enabled: true\n        dubbo:\n            parameter: multi\n        sync:\n            websocket:\n            urls: ws://shenyu-admin-svc.shenyu.svc.cluster.local:9095/websocket\n        exclude:\n            enabled: false\n            paths:\n            - /favicon.ico\n        extPlugin:\n            enabled: true\n            threads: 1\n            scheduleTime: 300\n            scheduleDelay: 30\n        scheduler:\n            enabled: false\n            type: fixed\n            threads: 16\n    logging:\n        level:\n            root: info\n            org.springframework.boot: info\n            org.apache.ibatis: info\n            org.apache.shenyu.bonuspoint: info\n            org.apache.shenyu.lottery: info\n            org.apache.shenyu: info\n  application-mysql.yml: |\n    spring.datasource.url: jdbc:mysql://mysql.shenyu.svc.cluster.local:3306/shenyu?useUnicode=true&characterEncoding=utf-8&useSSL=false\n    spring.datasource.username: {your_mysql_user}\n    spring.datasource.password: {your_mysql_password}\n")),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"\u6267\u884c ",(0,s.kt)("inlineCode",{parentName:"li"},"kubectl apply -f shenyu-ns.yaml"))),(0,s.kt)("h3",{id:"2-\u521b\u5efa-endpoint-\u4ee3\u7406\u5916\u90e8-mysql"},"2. \u521b\u5efa endpoint \u4ee3\u7406\u5916\u90e8 mysql"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"\u521b\u5efa\u6587\u4ef6 shenyu-ep.yaml")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-yaml"},"kind: Service\napiVersion: v1\nmetadata:\n  name: mysql\n  namespace: shenyu\nspec:\n  ports:\n  - port: 3306\n    name: mysql\n    targetPort: {your_mysql_port}\n---\nkind: Endpoints\napiVersion: v1\nmetadata:\n  name: mysql\n  namespace: shenyu\nsubsets:\n- addresses:\n  - ip: {your_mysql_ip}\n  ports:\n  - port: {your_mysql_port}\n    name: mysql\n")),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"\u6267\u884c ",(0,s.kt)("inlineCode",{parentName:"li"},"kubectl apply -f shenyu-ep.yaml"))),(0,s.kt)("h3",{id:"3-\u521b\u5efa-pv-\u5b58\u50a8-mysql-connectorjar"},"3. \u521b\u5efa pv \u5b58\u50a8 mysql-connector.jar"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"\u521b\u5efa\u6587\u4ef6 shenyu-store.yaml")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-yaml"},"# \u793a\u4f8b\u4f7f\u7528 pvc\u3001pv\u3001storageClass \u6765\u5b58\u50a8\u6587\u4ef6\napiVersion: v1\nkind: PersistentVolume\nmetadata:\n  name: shenyu-pv\nspec:\n  capacity:\n    storage: 1Gi\n  volumeMode: Filesystem\n  accessModes:\n  - ReadWriteOnce\n  persistentVolumeReclaimPolicy: Delete\n  storageClassName: local-storage\n  local:\n    path: /home/shenyu/shenyu-admin/k8s-pv  # \u6307\u5b9a\u8282\u70b9\u4e0a\u7684\u76ee\u5f55,\u8be5\u76ee\u5f55\u4e0b\u9762\u9700\u8981\u5305\u542b mysql-connector.jar\n  nodeAffinity:\n    required:\n      nodeSelectorTerms:\n      - matchExpressions:\n        - key: kubernetes.io/hostname\n          operator: In\n          values:\n          - {your_node_name} # \u6307\u5b9a\u8282\u70b9\n---\nkind: PersistentVolumeClaim\napiVersion: v1\nmetadata:\n  name: shenyu-pvc\n  namespace: shenyu\nspec:\n  accessModes:\n  - ReadWriteOnce\n  resources:\n    requests:\n      storage: 1Gi\n  storageClassName: local-storage\n---\napiVersion: storage.k8s.io/v1\nkind: StorageClass\nmetadata:\n  name: local-storage\nprovisioner: kubernetes.io/no-provisioner\nvolumeBindingMode: WaitForFirstConsumer\n")),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"\u6267\u884c ",(0,s.kt)("inlineCode",{parentName:"li"},"kubectl apply -f shenyu-store.yaml")),(0,s.kt)("li",{parentName:"ul"},"pv\u6302\u8f7d\u76ee\u5f55\u4e0b\u4e0a\u4f20 ",(0,s.kt)("inlineCode",{parentName:"li"},"mysql-connector.jar"))),(0,s.kt)("h3",{id:"4-\u90e8\u7f72-shenyu-admin"},"4. \u90e8\u7f72 shenyu-admin"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"\u521b\u5efa\u6587\u4ef6 shenyu-admin.yaml")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-yaml"},"# \u793a\u4f8b\u4f7f\u7528 nodeport \u65b9\u5f0f\u66b4\u9732\u7aef\u53e3\napiVersion: v1\nkind: Service\nmetadata:\n  namespace: shenyu\n  name: shenyu-admin-svc\nspec:\n  selector:\n    app: shenyu-admin\n  type: NodePort\n  ports:\n  - protocol: TCP\n    port: 9095\n    targetPort: 9095\n    nodePort: 31095\n---\n# shenyu-admin\napiVersion: apps/v1\nkind: Deployment\nmetadata:\n  namespace: shenyu\n  name: shenyu-admin\nspec:\n  selector:\n    matchLabels:\n      app: shenyu-admin\n  replicas: 1\n  template:\n    metadata:\n      labels:\n        app: shenyu-admin\n    spec:\n      volumes:\n      - name: mysql-connector-volume\n        persistentVolumeClaim:\n          claimName: shenyu-pvc\n      - name: shenyu-admin-config\n        configMap:\n          name: shenyu-cm\n          items:\n          - key: application-mysql.yml\n            path: application-mysql.yml\n      containers:\n      - name: shenyu-admin\n        image: apache/shenyu-admin:2.4.2\n        imagePullPolicy: Always\n        ports:\n        - containerPort: 9095\n        env:\n        - name: 'TZ'\n          value: 'Asia/Beijing'\n        - name: SPRING_PROFILES_ACTIVE\n          value: mysql\n        volumeMounts:\n        - name: shenyu-admin-config\n          mountPath: /opt/shenyu-admin/config/application-mysql.yml\n          subPath: application-mysql.yml\n        - mountPath: /opt/shenyu-admin/ext-lib\n          name: mysql-connector-volume\n")),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"\u6267\u884c",(0,s.kt)("inlineCode",{parentName:"li"},"kubectl apply -f shenyu-admin.yaml"))),(0,s.kt)("h3",{id:"3-\u90e8\u7f72-shenyu-bootstrap-1"},"3. \u90e8\u7f72 shenyu-bootstrap"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"\u521b\u5efa\u6587\u4ef6 shenyu-bootstrap.yaml")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-yaml"},"# \u793a\u4f8b\u4f7f\u7528 nodeport \u65b9\u5f0f\u66b4\u9732\u7aef\u53e3\napiVersion: v1\nkind: Service\nmetadata:\n  namespace: shenyu\n  name: shenyu-bootstrap-svc\nspec:\n  selector:\n    app: shenyu-bootstrap\n  type: NodePort\n  ports:\n  - protocol: TCP\n    port: 9195\n    targetPort: 9195\n    nodePort: 31195\n---\n# shenyu-bootstrap\napiVersion: apps/v1\nkind: Deployment\nmetadata:\n  namespace: shenyu\n  name: shenyu-bootstrap\nspec:\n  selector:\n    matchLabels:\n      app: shenyu-bootstrap\n  replicas: 1\n  template:\n    metadata:\n      labels:\n        app: shenyu-bootstrap\n    spec:\n      volumes:\n      - name: shenyu-bootstrap-config\n        configMap:\n          name: shenyu-cm\n          items:\n          - key: application-local.yml\n            path: application-local.yml\n      containers:\n      - name: shenyu-bootstrap\n        image: apache/shenyu-bootstrap:2.4.2\n        ports:\n        - containerPort: 9195\n        env:\n        - name: TZ\n          value: Asia/Beijing\n        volumeMounts:\n        - name: shenyu-bootstrap-config\n          mountPath: /opt/shenyu-bootstrap/conf/application-local.yml\n          subPath: application-local.yml\n")),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"\u6267\u884c ",(0,s.kt)("inlineCode",{parentName:"li"},"kubectl apply -f shenyu-bootstrap.yaml"))))}c.isMDXComponent=!0}}]);