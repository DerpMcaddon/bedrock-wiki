import{r as n,o as s,c as a,a as e,w as t,b as o,d as p}from"./404.md.11934eaa.js";const r='{"title":"Format Versions","description":"","frontmatter":{"layout":"page","title":"Format Versions","parent":"Concepts"},"relativePath":"concepts/format-version.md","lastUpdated":1623442926008}',i={},l=e("h1",{id:"format-versions"},[e("a",{class:"header-anchor",href:"#format-versions","aria-hidden":"true"},"#"),o(" Format Versions")],-1),c=e("p",null,[o("Most Addon files contain a "),e("code",null,"format_version"),o(" field, often in the description. Here is an example:")],-1),u=o("BP/entities/dragon.json"),d=p('<div class="language-json line-numbers-mode"><pre><code><span class="token punctuation">{</span>\n    <span class="token property">&quot;format_version&quot;</span><span class="token operator">:</span> <span class="token string">&quot;1.13.0&quot;</span><span class="token punctuation">,</span>\n    <span class="token property">&quot;minecraft:entity&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n        <span class="token property">&quot;description&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n            <span class="token property">&quot;identifier&quot;</span><span class="token operator">:</span> <span class="token string">&quot;wiki:dragon&quot;</span><span class="token punctuation">,</span>\n            <span class="token property">&quot;is_spawnable&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>\n            <span class="token property">&quot;is_summonable&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>\n            <span class="token property">&quot;is_experimental&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span>\n        <span class="token punctuation">}</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><p>Format versions exist so that Mojang can add new functionality into the Addon system without breaking old addons. In the example above, the format version is <code>1.13.0</code>. This means that the entity will be processed using the <code>1.13.0</code> entity mechanics.</p><p>When you pick a format version to use, you are tying that file <em>to</em> a specific version. You cannot utilize new components or functionality.</p>',3);i.render=function(o,p,r,i,m,b){const k=n("CodeHeader");return s(),a("div",null,[l,c,e(k,null,{default:t((()=>[u])),_:1}),d])};export default i;export{r as __pageData};