import{c as a,Q as n,j as e,m as t}from"./chunks/framework.BPKcPtvA.js";const g=JSON.parse('{"title":".NET基础","description":"","frontmatter":{},"headers":[],"relativePath":"posts/other/Dotnet基础.md","filePath":"posts/other/Dotnet基础.md"}'),p={name:"posts/other/Dotnet基础.md"};function l(i,s,c,d,o,r){return n(),e("div",null,[...s[0]||(s[0]=[t(`<h1 id="net基础" tabindex="-1">.NET基础 <a class="header-anchor" href="#net基础" aria-label="Permalink to &quot;.NET基础&quot;">​</a></h1><h2 id="c-数据类型" tabindex="-1">C#数据类型 <a class="header-anchor" href="#c-数据类型" aria-label="Permalink to &quot;C#数据类型&quot;">​</a></h2><p>C# 是面向对象的强类型高级语言，内置用于存储不同类型数据的内置数据类型。每种数据类型包含特定的取值范围，使用这些数据类型来表示在应用程序中存储的数据。数据类型进一步又被分为：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>• 值类型（Value types）</span></span>
<span class="line"><span>• 引用类型（Reference types）</span></span>
<span class="line"><span>• 指针类型（Pointer types）</span></span></code></pre></div><p>值类型特点：<strong>变量直接存储其值，派生于 <code>System.ValueType</code></strong>。值类型又细分为整数值类型、浮点类型、简单类型、枚举类型、结构类型、可以为 <code>null</code> 的值类型。</p><h3 id="一、-值类型-value-types" tabindex="-1">一、*值类型（Value types） <a class="header-anchor" href="#一、-值类型-value-types" aria-label="Permalink to &quot;一、*值类型（Value types）&quot;">​</a></h3><p>值类型变量可以直接分配给一个值。它们是从类 <code>System.ValueType</code> 中派生的。值类型直接包含数据。比如 <code>int</code>、<code>char</code>、<code>float</code>，它们分别存储数字、字母、浮点数。当您声明一个 <code>int</code> 类型时，系统分配内存来存储值。</p><table tabindex="0"><thead><tr><th style="text-align:left;">类型</th><th style="text-align:left;">描述</th><th style="text-align:left;">范围</th><th style="text-align:left;">默认值</th></tr></thead><tbody><tr><td style="text-align:left;">bool</td><td style="text-align:left;">布尔值</td><td style="text-align:left;">True 或 False</td><td style="text-align:left;">False</td></tr><tr><td style="text-align:left;">byte</td><td style="text-align:left;">8 位无符号整数</td><td style="text-align:left;">0 到 255</td><td style="text-align:left;">0</td></tr><tr><td style="text-align:left;">char</td><td style="text-align:left;">16 位 Unicode 字符</td><td style="text-align:left;">U +0000 到 U +ffff</td><td style="text-align:left;">&#39;\\0&#39;</td></tr><tr><td style="text-align:left;">decimal</td><td style="text-align:left;">128 位精确的十进制值，28-29 有效位数（浮点型）</td><td style="text-align:left;">(-7.9 x 1028 到 7.9 x 1028) / 100 到 28</td><td style="text-align:left;">0.0M</td></tr><tr><td style="text-align:left;">double</td><td style="text-align:left;">64 位双精度浮点型</td><td style="text-align:left;">(+/-)5.0 x 10-324 到 (+/-)1.7 x 10308</td><td style="text-align:left;">0.0D</td></tr><tr><td style="text-align:left;">float</td><td style="text-align:left;">32 位单精度浮点型</td><td style="text-align:left;">-3.4 x 1038 到 + 3.4 x 1038</td><td style="text-align:left;">0.0F</td></tr><tr><td style="text-align:left;">int</td><td style="text-align:left;">32 位有符号整数类型</td><td style="text-align:left;">-2,147,483,648 到 2,147,483,647</td><td style="text-align:left;">0</td></tr><tr><td style="text-align:left;">long</td><td style="text-align:left;">64 位有符号整数类型</td><td style="text-align:left;">-923,372,036,854,775,808 到 9,223,372,036,854,775,807</td><td style="text-align:left;">0L</td></tr><tr><td style="text-align:left;">sbyte</td><td style="text-align:left;">8 位有符号整数类型</td><td style="text-align:left;">-128 到 127</td><td style="text-align:left;">0</td></tr><tr><td style="text-align:left;">short</td><td style="text-align:left;">16 位有符号整数类型</td><td style="text-align:left;">-32,768 到 32,767</td><td style="text-align:left;">0</td></tr><tr><td style="text-align:left;">uint</td><td style="text-align:left;">32 位无符号整数类型</td><td style="text-align:left;">0 到 4,294,967,295</td><td style="text-align:left;">0</td></tr><tr><td style="text-align:left;">ulong</td><td style="text-align:left;">64 位无符号整数类型</td><td style="text-align:left;">0 到 18,446,744,073,709,551,615</td><td style="text-align:left;">0</td></tr><tr><td style="text-align:left;">ushort</td><td style="text-align:left;">16 位无符号整数类型</td><td style="text-align:left;">0 到 65,535</td><td style="text-align:left;">0</td></tr></tbody></table><p>如需得到一个类型或一个变量在特定平台上的准确尺寸，可以使用 <code>sizeof</code> 方法。表达式 <code>sizeof(type)</code> 产生以字节为单位存储对象或类型的存储尺寸。下面举例获取任何机器上 <code>int</code> 类型的存储尺寸：</p><p>字节（Byte）是计算机信息技术用于计量存储容量的一种计量单位，也表示一些计算机编程语言中的数据类型和语言字符 [1] 。</p><p>一个字节存储8位无符号数，储存的数值范围为0-255。如同字元一样，字节型态的变数只需要用一个位元组（8位元）的内存空间储存 [1] 。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>  namespace DataTypeApplication</span></span>
<span class="line"><span>      {</span></span>
<span class="line"><span>         class Program</span></span>
<span class="line"><span>         {</span></span>
<span class="line"><span>            static void Main(string[] args)</span></span>
<span class="line"><span>            {</span></span>
<span class="line"><span>               Console.WriteLine(&quot;Size of int: {0}&quot;, sizeof(int));</span></span>
<span class="line"><span>               Console.ReadLine();</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span>         }</span></span>
<span class="line"><span>      }</span></span></code></pre></div><p>当上面的代码被编译和执行时，它会产生下列结果：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span> Size of int: 4</span></span></code></pre></div><h3 id="二、引用类型-reference-types" tabindex="-1">二、引用类型（Reference types） <a class="header-anchor" href="#二、引用类型-reference-types" aria-label="Permalink to &quot;二、引用类型（Reference types）&quot;">​</a></h3><p>引用类型不包含存储在变量中的实际数据，但它们包含对变量的引用。换句话说，它们指的是一个内存位置。使用多个变量时，引用类型可以指向一个内存位置。如果内存位置的数据是由一个变量改变的，其他变量会自动反映这种值的变化。内置的 引用类型有：<code>object</code>、<code>dynamic</code> 和 <code>string</code>。</p><h4 id="_1-、对象-object-类型" tabindex="-1">（1）、对象（Object）类型 <a class="header-anchor" href="#_1-、对象-object-类型" aria-label="Permalink to &quot;（1）、对象（Object）类型&quot;">​</a></h4><p>对象（<code>Object</code>）类型 是 C# 通用类型系统（Common Type System - CTS）中所有数据类型的终极基类。<code>Object</code> 是 <code>System.Object</code> 类的别名。所以对象（<code>Object</code>）类型可以被分配任何其他类型（值类型、引用类型、预定义类型或用户自定义类型）的值。但是，在分配值之前，需要先进行类型转换。<strong>当一个值类型转换为对象类型时，则被称为 装箱；另一方面，当一个对象类型转换为值类型时，则被称为 拆箱。</strong></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>    object obj;    obj = 100; // 这是装箱</span></span></code></pre></div><h4 id="_2-、动态-dynamic-类型" tabindex="-1">（2）、动态（Dynamic）类型 <a class="header-anchor" href="#_2-、动态-dynamic-类型" aria-label="Permalink to &quot;（2）、动态（Dynamic）类型&quot;">​</a></h4><p>您可以存储任何类型的值在动态数据类型变量中。这些变量的类型检查是在运行时发生的。声明动态类型的语法：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>    dynamic &lt;variable_name&gt; = value;</span></span></code></pre></div><p>例如：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>    dynamic d = 20;</span></span></code></pre></div><p>动态类型与对象类型相似，但是对象类型变量的类型检查是在编译时发生的，而动态类型变量的类型检查是在运行时发生的。</p><h4 id="_3-、字符串-string-类型" tabindex="-1">（3）、字符串（String）类型 <a class="header-anchor" href="#_3-、字符串-string-类型" aria-label="Permalink to &quot;（3）、字符串（String）类型&quot;">​</a></h4><p>字符串（<code>String</code>）类型 允许您给变量分配任何字符串值。字符串（<code>String</code>）类型是 <code>System.String</code> 类的别名。它是从对象（<code>Object</code>）类型派生的。字符串（<code>String</code>）类型的值可以通过两种形式进行分配：<strong>引号</strong>和 <strong>@引号</strong>。</p><p>例如：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>    String str = &quot;runoob.com&quot;;</span></span></code></pre></div><p>一个 @引号字符串：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>    @&quot;runoob.com&quot;;</span></span></code></pre></div><p>C# <code>string</code> 字符串的前面可以加 <strong>@</strong>（称作&quot;逐字字符串&quot;）<strong>将转义字符（\\）当作普通字符对待</strong>，比如：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>    string str = @&quot;C:\\Windows&quot;;</span></span></code></pre></div><p>等价于：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>    string str = &quot;C:\\\\Windows&quot;;</span></span></code></pre></div><p>@ 字符串中可以任意换行，换行符及缩进空格都计算在字符串长度之内。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>       string str = @&quot;&lt;script type=&quot;&quot;text/javascript&quot;&quot;&gt;           &lt;!--           --&gt;       &lt;/script&gt;&quot;;</span></span></code></pre></div><p>用户自定义引用类型有：<code>class</code>、<code>interface</code> 或 <code>delegate</code>。我们将在以后的章节中讨论这些类型。</p><h3 id="三、-指针类型-pointer-types" tabindex="-1">三、*指针类型（Pointer types） <a class="header-anchor" href="#三、-指针类型-pointer-types" aria-label="Permalink to &quot;三、*指针类型（Pointer types）&quot;">​</a></h3><p>指针类型变量存储另一种类型的内存地址。C# 中的指针与 C 或 C++ 中的指针有相同的功能。</p><p>声明指针类型的语法：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>    type* identifier;</span></span></code></pre></div><p>例如：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span> 复制代码    char* cptr;    int* iptr;</span></span></code></pre></div><h3 id="四、枚举" tabindex="-1">四、枚举 <a class="header-anchor" href="#四、枚举" aria-label="Permalink to &quot;四、枚举&quot;">​</a></h3><p><code>enum</code> 是值类型数据类型。枚举用于声明命名整数常量的列表。可以直接在命名空间，类或结构中使用 <code>enum</code> 关键字定义。</p><ul><li>枚举用于为每个常量指定一个名称，以便可以使用其名称引用常量整数默认情况下，枚举的第一个成员的值为 0，每个连续的枚举成员的值增加 1</li><li>枚举可以包括数字数据类型的命名常量，例如 <code>byte</code>，<code>sbyte</code>，<code>short</code>，<code>ushort</code>，<code>int</code>，<code>uint</code>，<code>long</code> 或 <code>ulong</code></li><li>枚举不能与字符串类型一起使用</li></ul><p><code>Enum</code> 是一个抽象类，包含用于枚举的静态帮助器方法</p><table tabindex="0"><thead><tr><th style="text-align:left;"><strong>Enum method</strong></th><th style="text-align:left;"><strong>Description</strong></th></tr></thead><tbody><tr><td style="text-align:left;"><code>Format</code></td><td style="text-align:left;">将指定的枚举类型值转换为指定的字符串格式</td></tr><tr><td style="text-align:left;"><code>GetName</code></td><td style="text-align:left;">返回指定枚举的指定值的常量的名称</td></tr><tr><td style="text-align:left;"><code>GetNames</code></td><td style="text-align:left;">返回指定枚举的所有常量的字符串名称数组</td></tr><tr><td style="text-align:left;"><code>GetValues</code></td><td style="text-align:left;">返回指定枚举的所有常量值的数组</td></tr><tr><td style="text-align:left;"><code>object Parse(type, string)</code></td><td style="text-align:left;">将一个或多个枚举常量的名称或数值的字符串表示形式转换为等效的枚举对象</td></tr><tr><td style="text-align:left;"><code>bool TryParse(string, out TEnum)</code></td><td style="text-align:left;">将一个或多个枚举常量的名称或数值的字符串表示形式转换为等效的枚举对象，返回值表示转换是否成功</td></tr></tbody></table><h2 id="c-变量" tabindex="-1">c#变量 <a class="header-anchor" href="#c-变量" aria-label="Permalink to &quot;c#变量&quot;">​</a></h2><p>编译器需要用某个初始值对变量进行初始化之后才能在操作中使用该变量。</p><p>在这里，<code>data_type</code> 必须是一个有效的 C# 数据类型，可以是 <code>char</code>、<code>int</code>、<code>float</code>、<code>double</code> 或其他用户自定义的数据类型。<code>variablename</code> 可以由一个或多个用逗号分隔的标识符名称组成。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>// 语法</span></span>
<span class="line"><span>&lt;datatype&gt;&lt;variablename&gt;=&lt;value&gt;;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 示例</span></span>
<span class="line"><span>string name = &quot;wang&quot;;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 同时声明多个</span></span>
<span class="line"><span>string name1,name2 = &quot;wang&quot;;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  int d = 3, f = 5;    /* 初始化 d 和 f. */</span></span>
<span class="line"><span>    byte z = 22;         /* 初始化 z. */</span></span>
<span class="line"><span>    double pi = 3.14159; /* 声明 pi 的近似值 */</span></span>
<span class="line"><span>    char x = &#39;x&#39;;        /* 变量 x 的值为 &#39;x&#39; */</span></span></code></pre></div><h3 id="接受来自用户的值" tabindex="-1">接受来自用户的值 <a class="header-anchor" href="#接受来自用户的值" aria-label="Permalink to &quot;接受来自用户的值&quot;">​</a></h3><p><code>System</code> 命名空间中的 <code>Console</code> 类提供了一个函数 <code>ReadLine()</code>，用于接收来自用户的输入，并把它存储到一个变量中。</p><p>例如：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>        int num;</span></span>
<span class="line"><span>            num = Convert.ToInt32(Console.ReadLine());</span></span>
<span class="line"><span>            Console.WriteLine(num);</span></span></code></pre></div><p><strong>注意</strong>：</p><ul><li>变量是类或结构中的字段，如果没有显式初始化，创建这些变量时，默认值就是类型默认值</li><li>方法的局部变量必须在代码中显式初始化才能在语句中使用</li><li>在C#中实例化一个引用对象需要使用 <code>new</code> 关键字把该引用指向存储在堆上的一个对象</li></ul><h2 id="c-运算符" tabindex="-1">c# 运算符 <a class="header-anchor" href="#c-运算符" aria-label="Permalink to &quot;c# 运算符&quot;">​</a></h2><p>运算符是一种告诉编译器执行特定的数学或逻辑操作的符号。C# 有丰富的内置运算符，分类如下：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>• 算术运算符</span></span>
<span class="line"><span>• 关系运算符</span></span>
<span class="line"><span>• 逻辑运算符</span></span>
<span class="line"><span>• 位运算符</span></span>
<span class="line"><span>• 赋值运算符</span></span>
<span class="line"><span>• 其他运算符</span></span></code></pre></div><h3 id="一、算术运算符" tabindex="-1">一、算术运算符 <a class="header-anchor" href="#一、算术运算符" aria-label="Permalink to &quot;一、算术运算符&quot;">​</a></h3><p>下表显示了 C# 支持的所有算术运算符。假设变量 A 的值为 10，变量 B 的值为 20，则：</p><table tabindex="0"><thead><tr><th style="text-align:left;">运算符</th><th style="text-align:left;">描述</th><th style="text-align:left;">实例</th></tr></thead><tbody><tr><td style="text-align:left;">+</td><td style="text-align:left;">把两个操作数相加</td><td style="text-align:left;">A + B 将得到 30</td></tr><tr><td style="text-align:left;">-</td><td style="text-align:left;">从第一个操作数中减去第二个操作数</td><td style="text-align:left;">A - B 将得到 -10</td></tr><tr><td style="text-align:left;">*</td><td style="text-align:left;">把两个操作数相乘</td><td style="text-align:left;">A B 将得到 200</td></tr><tr><td style="text-align:left;">/</td><td style="text-align:left;">分子除以分母</td><td style="text-align:left;">B / A 将得到 2</td></tr><tr><td style="text-align:left;">%</td><td style="text-align:left;">取模运算符，整除后的余数</td><td style="text-align:left;">B % A 将得到 0</td></tr><tr><td style="text-align:left;">++</td><td style="text-align:left;">自增运算符，整数值增加 1</td><td style="text-align:left;">A++ 将得到 11</td></tr><tr><td style="text-align:left;">—</td><td style="text-align:left;">自减运算符，整数值减少 1</td><td style="text-align:left;">A— 将得到 9</td></tr></tbody></table><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>8 % 4      2余0      0</span></span>
<span class="line"><span></span></span>
<span class="line"><span>9 % 4      2余1      1</span></span>
<span class="line"><span></span></span>
<span class="line"><span>9 % 5      1余4      4</span></span>
<span class="line"><span></span></span>
<span class="line"><span>11 % 5     2余1     1</span></span>
<span class="line"><span></span></span>
<span class="line"><span>8 % 5      1余3      3</span></span>
<span class="line"><span></span></span>
<span class="line"><span>得到的结果为做除法后的余数，%是求余运算符</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>            int a = 21;</span></span>
<span class="line"><span>            int b = 10;</span></span>
<span class="line"><span>            int c;</span></span>
<span class="line"><span>            c = a + b;</span></span>
<span class="line"><span>            Console.WriteLine(&quot;Line 1 - c 的值是 {0}&quot;, c);</span></span>
<span class="line"><span>            c = a - b;</span></span>
<span class="line"><span>            Console.WriteLine(&quot;Line 2 - c 的值是 {0}&quot;, c);</span></span>
<span class="line"><span>            c = a * b;</span></span>
<span class="line"><span>            Console.WriteLine(&quot;Line 3 - c 的值是 {0}&quot;, c);</span></span>
<span class="line"><span>            c = a / b;</span></span>
<span class="line"><span>            Console.WriteLine(&quot;Line 4 - c 的值是 {0}&quot;, c);</span></span>
<span class="line"><span>            c = a % b;</span></span>
<span class="line"><span>            Console.WriteLine(&quot;Line 5 - c 的值是 {0}&quot;, c);</span></span>
<span class="line"><span>            // ++a 先进行自增运算再赋值</span></span>
<span class="line"><span>            c = ++a;</span></span>
<span class="line"><span>            Console.WriteLine(&quot;Line 6 - c 的值是 {0}&quot;, c);</span></span>
<span class="line"><span>            // 此时 a 的值为 22</span></span>
<span class="line"><span>            // --a 先进行自减运算再赋值</span></span>
<span class="line"><span>            c = --a;</span></span>
<span class="line"><span>            Console.WriteLine(&quot;Line 7 - c 的值是 {0}&quot;, c);</span></span>
<span class="line"><span>            Console.ReadLine();</span></span>
<span class="line"><span>            </span></span>
<span class="line"><span>    Line 1 - c 的值是 31</span></span>
<span class="line"><span>    Line 2 - c 的值是 11</span></span>
<span class="line"><span>    Line 3 - c 的值是 210</span></span>
<span class="line"><span>    Line 4 - c 的值是 2</span></span>
<span class="line"><span>    Line 5 - c 的值是 1</span></span>
<span class="line"><span>    Line 6 - c 的值是 22</span></span>
<span class="line"><span>    Line 7 - c 的值是 21</span></span>
<span class="line"><span>• c = a++: 先将 a 赋值给 c，再对 a 进行自增运算。</span></span>
<span class="line"><span>• c = ++a: 先将 a 进行自增运算，再将 a 赋值给 c 。</span></span>
<span class="line"><span>• c = a--: 先将 a 赋值给 c，再对 a 进行自减运算。</span></span>
<span class="line"><span>• c = --a: 先将 a 进行自减运算，再将 a 赋值给 c 。</span></span>
<span class="line"><span>示例：</span></span>
<span class="line"><span>               int a = 1;</span></span>
<span class="line"><span>                int b;</span></span>
<span class="line"><span>                // a++ **先赋值再进行自增运算**</span></span>
<span class="line"><span>                b = a++;</span></span>
<span class="line"><span>                Console.WriteLine(&quot;a = {0}&quot;, a);</span></span>
<span class="line"><span>                Console.WriteLine(&quot;b = {0}&quot;, b);</span></span>
<span class="line"><span>                Console.ReadLine();</span></span>
<span class="line"><span>                // ++a **先进行自增运算再赋值**</span></span>
<span class="line"><span>                a = 1; // 重新初始化 a</span></span>
<span class="line"><span>                b = ++a;</span></span>
<span class="line"><span>                Console.WriteLine(&quot;a = {0}&quot;, a);</span></span>
<span class="line"><span>                Console.WriteLine(&quot;b = {0}&quot;, b);</span></span>
<span class="line"><span>                Console.ReadLine();</span></span>
<span class="line"><span>                // a-- 先赋值再进行自减运算</span></span>
<span class="line"><span>                a = 1;  // 重新初始化 a</span></span>
<span class="line"><span>                b= a--;</span></span>
<span class="line"><span>                Console.WriteLine(&quot;a = {0}&quot;, a);</span></span>
<span class="line"><span>                Console.WriteLine(&quot;b = {0}&quot;, b);</span></span>
<span class="line"><span>                Console.ReadLine();</span></span>
<span class="line"><span>                // --a 先进行自减运算再赋值</span></span>
<span class="line"><span>                a = 1;  // 重新初始化 a</span></span>
<span class="line"><span>                b= --a;</span></span>
<span class="line"><span>                Console.WriteLine(&quot;a = {0}&quot;, a);</span></span>
<span class="line"><span>                Console.WriteLine(&quot;b = {0}&quot;, b);</span></span>
<span class="line"><span>                Console.ReadLine();</span></span></code></pre></div><h3 id="二、关系运算符" tabindex="-1">二、关系运算符 <a class="header-anchor" href="#二、关系运算符" aria-label="Permalink to &quot;二、关系运算符&quot;">​</a></h3><p>下表显示了 C# 支持的所有关系运算符。假设变量 A 的值为 10，变量 B 的值为 20，则：</p><table tabindex="0"><thead><tr><th style="text-align:left;">运算符</th><th style="text-align:left;">描述</th><th style="text-align:left;">实例</th></tr></thead><tbody><tr><td style="text-align:left;"><code>==</code></td><td style="text-align:left;">检查两个操作数的值是否相等，如果相等则条件为真。</td><td style="text-align:left;">(A <code>== B)</code> 不为真。</td></tr><tr><td style="text-align:left;"><code>!=</code></td><td style="text-align:left;">检查两个操作数的值是否相等，如果不相等则条件为真。</td><td style="text-align:left;"><code>(A != B)</code> 为真。</td></tr><tr><td style="text-align:left;"><code>&gt;</code></td><td style="text-align:left;">检查左操作数的值是否大于右操作数的值，如果是则条件为真。</td><td style="text-align:left;"><code>(A &gt; B)</code> 不为真。</td></tr><tr><td style="text-align:left;"><code>&lt;</code></td><td style="text-align:left;">检查左操作数的值是否小于右操作数的值，如果是则条件为真。</td><td style="text-align:left;"><code>(A &lt; B)</code> 为真。</td></tr><tr><td style="text-align:left;"><code>&gt;=</code></td><td style="text-align:left;">检查左操作数的值是否大于或等于右操作数的值，如果是则条件为真。</td><td style="text-align:left;"><code>(A &gt;= B)</code> 不为真。</td></tr><tr><td style="text-align:left;"><code>&lt;=</code></td><td style="text-align:left;">检查左操作数的值是否小于或等于右操作数的值，如果是则条件为真。</td><td style="text-align:left;"><code>(A &lt;= B)</code> 为真。</td></tr></tbody></table><h3 id="三、逻辑运算符" tabindex="-1">三、逻辑运算符 <a class="header-anchor" href="#三、逻辑运算符" aria-label="Permalink to &quot;三、逻辑运算符&quot;">​</a></h3><p>下表显示了 C# 支持的所有逻辑运算符。假设变量 A 为布尔值 <code>true</code>，变量 B 为布尔值 <code>false</code>，则：</p><table tabindex="0"><thead><tr><th style="text-align:left;">运算符</th><th style="text-align:left;">描述</th><th style="text-align:left;">实例</th></tr></thead><tbody><tr><td style="text-align:left;"><code>&amp;&amp;</code></td><td style="text-align:left;">称为逻辑与运算符。如果两个操作数都非零，则条件为真。</td><td style="text-align:left;"><code>(A &amp;&amp; B)</code> 为假。</td></tr><tr><td style="text-align:left;">II</td><td style="text-align:left;">称为逻辑或运算符。如果两个操作数中有任意一个非零，则条件为真。</td><td style="text-align:left;">(A II B) 为真。</td></tr><tr><td style="text-align:left;">!</td><td style="text-align:left;">称为逻辑非运算符。用来逆转操作数的逻辑状态。如果条件为真则逻辑非运算符将使其为假。</td><td style="text-align:left;"><code>!(A &amp;&amp; B)</code> 为真。</td></tr></tbody></table><h3 id="四、赋值运算符" tabindex="-1">四、赋值运算符 <a class="header-anchor" href="#四、赋值运算符" aria-label="Permalink to &quot;四、赋值运算符&quot;">​</a></h3><p>下表列出了 C# 支持的赋值运算符：</p><table tabindex="0"><thead><tr><th style="text-align:left;">运算符</th><th style="text-align:left;">描述</th><th style="text-align:left;">实例</th></tr></thead><tbody><tr><td style="text-align:left;"><code>=</code></td><td style="text-align:left;">简单的赋值运算符，把右边操作数的值赋给左边操作数</td><td style="text-align:left;">C = A + B 将把 A + B 的值赋给 C</td></tr><tr><td style="text-align:left;"><code>+=</code></td><td style="text-align:left;">加且赋值运算符，把右边操作数加上左边操作数的结果赋值给左边操作数</td><td style="text-align:left;">C += A 相当于 C = C + A</td></tr><tr><td style="text-align:left;"><code>-=</code></td><td style="text-align:left;">减且赋值运算符，把左边操作数减去右边操作数的结果赋值给左边操作数</td><td style="text-align:left;">C -= A 相当于 C = C - A</td></tr><tr><td style="text-align:left;"><code>*=</code></td><td style="text-align:left;">乘且赋值运算符，把右边操作数乘以左边操作数的结果赋值给左边操作数</td><td style="text-align:left;">C <em>= A 相当于 C = C</em> A</td></tr><tr><td style="text-align:left;"><code>/=</code></td><td style="text-align:left;">除且赋值运算符，把左边操作数除以右边操作数的结果赋值给左边操作数</td><td style="text-align:left;">C /= A 相当于 C = C / A</td></tr><tr><td style="text-align:left;"><code>%=</code></td><td style="text-align:left;">求模且赋值运算符，求两个操作数的模赋值给左边操作数</td><td style="text-align:left;">C %= A 相当于 C = C % A</td></tr><tr><td style="text-align:left;"><code>&lt;&lt;=</code></td><td style="text-align:left;">左移且赋值运算符</td><td style="text-align:left;"><code>C &lt;&lt;= 2</code> 等同于 <code>C = C &lt;&lt; 2</code></td></tr><tr><td style="text-align:left;"><code>&gt;&gt;=</code></td><td style="text-align:left;">右移且赋值运算符</td><td style="text-align:left;"><code>C &gt;&gt;= 2</code> 等同于 <code>C = C &gt;&gt; 2</code></td></tr><tr><td style="text-align:left;"><code>&amp;=</code></td><td style="text-align:left;">按位与且赋值运算符</td><td style="text-align:left;"><code>C &amp;= 2</code> 等同于 <code>C = C &amp; 2</code></td></tr><tr><td style="text-align:left;"><code>^=</code></td><td style="text-align:left;">按位异或且赋值运算符</td><td style="text-align:left;"><code>C ^= 2</code> 等同于 <code>C = C ^ 2</code></td></tr><tr><td style="text-align:left;">I=</td><td style="text-align:left;">按位或且赋值运算符</td><td style="text-align:left;">C I= 2 等同于 C = C I 2</td></tr></tbody></table><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>                int a = 21;</span></span>
<span class="line"><span>                int c;</span></span>
<span class="line"><span>                c = a;</span></span>
<span class="line"><span>                Console.WriteLine(&quot;Line 1 - =  c 的值 = {0}&quot;, c);</span></span>
<span class="line"><span>                c += a;</span></span>
<span class="line"><span>                Console.WriteLine(&quot;Line 2 - += c 的值 = {0}&quot;, c);</span></span>
<span class="line"><span>                c -= a;</span></span>
<span class="line"><span>                Console.WriteLine(&quot;Line 3 - -=  c 的值 = {0}&quot;, c);</span></span>
<span class="line"><span>                c *= a;</span></span>
<span class="line"><span>                Console.WriteLine(&quot;Line 4 - *=  c 的值 = {0}&quot;, c);</span></span>
<span class="line"><span>                c /= a;</span></span>
<span class="line"><span>                Console.WriteLine(&quot;Line 5 - /=  c 的值 = {0}&quot;, c);</span></span>
<span class="line"><span>                c = 200;</span></span>
<span class="line"><span>                c %= a;</span></span>
<span class="line"><span>                Console.WriteLine(&quot;Line 6 - %=  c 的值 = {0}&quot;, c);</span></span>
<span class="line"><span>                c &lt;&lt;= 2;</span></span>
<span class="line"><span>                Console.WriteLine(&quot;Line 7 - &lt;&lt;=  c 的值 = {0}&quot;, c);</span></span>
<span class="line"><span>                c &gt;&gt;= 2;</span></span>
<span class="line"><span>                Console.WriteLine(&quot;Line 8 - &gt;&gt;=  c 的值 = {0}&quot;, c);</span></span>
<span class="line"><span>                c &amp;= 2;</span></span>
<span class="line"><span>                Console.WriteLine(&quot;Line 9 - &amp;=  c 的值 = {0}&quot;, c);</span></span>
<span class="line"><span>                c ^= 2;</span></span>
<span class="line"><span>                Console.WriteLine(&quot;Line 10 - ^=  c 的值 = {0}&quot;, c);</span></span>
<span class="line"><span>                c |= 2;</span></span>
<span class="line"><span>                Console.WriteLine(&quot;Line 11 - |=  c 的值 = {0}&quot;, c);</span></span>
<span class="line"><span>                Console.ReadLine();</span></span>
<span class="line"><span>                </span></span>
<span class="line"><span>                </span></span>
<span class="line"><span>                </span></span>
<span class="line"><span>    Line 1 - =     c 的值 = 21</span></span>
<span class="line"><span>    Line 2 - +=    c 的值 = 42</span></span>
<span class="line"><span>    Line 3 - -=    c 的值 = 21</span></span>
<span class="line"><span>    Line 4 - *=    c 的值 = 441</span></span>
<span class="line"><span>    Line 5 - /=    c 的值 = 21</span></span>
<span class="line"><span>    Line 6 - %=    c 的值 = 11</span></span>
<span class="line"><span>    Line 7 - &lt;&lt;=    c 的值 = 44</span></span>
<span class="line"><span>    Line 8 - &gt;&gt;=    c 的值 = 11</span></span>
<span class="line"><span>    Line 9 - &amp;=    c 的值 = 2</span></span>
<span class="line"><span>    Line 10 - ^=    c 的值 = 0</span></span>
<span class="line"><span>    Line 11 - |=    c 的值 = 2</span></span></code></pre></div><h3 id="六、其他运算符" tabindex="-1">六、其他运算符 <a class="header-anchor" href="#六、其他运算符" aria-label="Permalink to &quot;六、其他运算符&quot;">​</a></h3><p>下表列出了 C# 支持的其他一些重要的运算符，包括 <code>sizeof</code>、<code>typeof</code> 和 <code>? :</code>。</p><table tabindex="0"><thead><tr><th style="text-align:left;">运算符</th><th style="text-align:left;">描述</th><th style="text-align:left;">实例</th></tr></thead><tbody><tr><td style="text-align:left;">sizeof()</td><td style="text-align:left;">返回数据类型的大小。</td><td style="text-align:left;"><code>sizeof(int)</code>，将返回 4.</td></tr><tr><td style="text-align:left;">typeof()</td><td style="text-align:left;">返回 class 的类型。</td><td style="text-align:left;"><code>typeof(StreamReader);</code></td></tr><tr><td style="text-align:left;">&amp;</td><td style="text-align:left;">返回变量的地址。</td><td style="text-align:left;">&amp;a; 将得到变量的实际地址。</td></tr><tr><td style="text-align:left;"></td><td style="text-align:left;">变量的指针。</td><td style="text-align:left;">a; 将指向一个变量。</td></tr><tr><td style="text-align:left;">? :</td><td style="text-align:left;">条件表达式</td><td style="text-align:left;">如果条件为真 ? 则为 X : 否则为 Y</td></tr><tr><td style="text-align:left;">is</td><td style="text-align:left;">判断对象是否为某一类型。</td><td style="text-align:left;"><code>If( Ford is Car) // 检查 Ford 是否是 Car 类的一个对象。</code></td></tr><tr><td style="text-align:left;">as</td><td style="text-align:left;">强制转换，即使转换失败也不会抛出异常。</td><td style="text-align:left;"><code>Object obj = new StringReader(&quot;Hello&quot;);\`\`StringReader r = obj as StringReader;</code></td></tr><tr><td style="text-align:left;">？</td><td style="text-align:left;">可空类型和运算符</td><td style="text-align:left;">int? a = null;<br>int? c = a + 4; //c=null</td></tr><tr><td style="text-align:left;">？？</td><td style="text-align:left;">空合并运算符</td><td style="text-align:left;">空合并运算符 <code>??</code> 提供了快捷方式处理可空类型和引用类型时表示 <code>null</code> 可能的值。如果第一个操作数不是<code>null</code>，值就等于第一个操作数的值/如果第一个操作数是<code>null</code>，值就等于第二个操作数的值</td></tr><tr><td style="text-align:left;">checked/unchecked</td><td style="text-align:left;"></td><td style="text-align:left;">如果把代码块标记为 <code>checked</code> ， <code>CLR</code> 就会执行栈溢出检测，如果要禁止栈溢出，则可以把代码标记 <code>unchecked</code> 。</td></tr></tbody></table><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>            /* sizeof 运算符的实例 */</span></span>
<span class="line"><span>             Console.WriteLine(&quot;int 的大小是 {0}&quot;, sizeof(int));</span></span>
<span class="line"><span>             Console.WriteLine(&quot;short 的大小是 {0}&quot;, sizeof(short));</span></span>
<span class="line"><span>             Console.WriteLine(&quot;double 的大小是 {0}&quot;, sizeof(double));</span></span>
<span class="line"><span>             /* 三元运算符符的实例 */</span></span>
<span class="line"><span>             int a, b;</span></span>
<span class="line"><span>             a = 10;</span></span>
<span class="line"><span>             b = (a == 1) ? 20 : 30;</span></span>
<span class="line"><span>             Console.WriteLine(&quot;b 的值是 {0}&quot;, b);</span></span>
<span class="line"><span>             b = (a == 10) ? 20 : 30;</span></span>
<span class="line"><span>             Console.WriteLine(&quot;b 的值是 {0}&quot;, b);</span></span>
<span class="line"><span>             // 空合并运算符</span></span>
<span class="line"><span>             int? a = null;</span></span>
<span class="line"><span>             int b;</span></span>
<span class="line"><span>             b = a ?? 10;//第一个操作数是null，值为第二个操作数.10</span></span>
<span class="line"><span>             a = 3;</span></span>
<span class="line"><span>             b = a ?? 10;//第一个操作数不是null，值为第一个操作数.3</span></span>
<span class="line"><span>             // checked/unchecked</span></span>
<span class="line"><span>           //byte类型最大取值255</span></span>
<span class="line"><span>            byte a = 255;</span></span>
<span class="line"><span>            checked</span></span>
<span class="line"><span>           {</span></span>
<span class="line"><span>              a++;</span></span>
<span class="line"><span>           }</span></span>
<span class="line"><span>//这里如果不加checed.++后输出0(不会抛异常，但会丢失数据，溢出的位会被舍弃，所以值为0)，加上后会抛出栈溢出异常</span></span>
<span class="line"><span>Console.WriteLine(a);</span></span>
<span class="line"><span>             Console.ReadLine();</span></span></code></pre></div><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>    int 的大小是 4</span></span>
<span class="line"><span>    short 的大小是 2</span></span>
<span class="line"><span>    double 的大小是 8</span></span>
<span class="line"><span>    b 的值是 30</span></span>
<span class="line"><span>    b 的值是 20</span></span></code></pre></div><h3 id="七、c-中的运算符优先级" tabindex="-1">七、C# 中的运算符优先级 <a class="header-anchor" href="#七、c-中的运算符优先级" aria-label="Permalink to &quot;七、C# 中的运算符优先级&quot;">​</a></h3><p>运算符的优先级确定表达式中项的组合。这会影响到一个表达式如何计算。某些运算符比其他运算符有更高的优先级，例如，乘除运算符具有比加减运算符更高的优先级。</p><p>例如 <code>x = 7 + 3 *2*</code><em>，在这里，x 被赋值为 13，而不是 20，因为运算符</em> 具有比 + 更高的优先级，所以首先计算乘法 3*2，然后再加上 7。</p><p>下表将按运算符优先级从高到低列出各个运算符，具有较高优先级的运算符出现在表格的上面，具有较低优先级的运算符出现在表格的下面。在表达式中，较高优先级的运算符会优先被计算。</p><table tabindex="0"><thead><tr><th style="text-align:left;">类别</th><th style="text-align:left;">运算符</th><th style="text-align:left;">结合性</th></tr></thead><tbody><tr><td style="text-align:left;">后缀</td><td style="text-align:left;"><code>() [] -&gt; . ++ - -</code></td><td style="text-align:left;">从左到右</td></tr><tr><td style="text-align:left;">一元</td><td style="text-align:left;"><code>+ - ! ~ ++ - - (type) *&amp; sizeof*</code></td><td style="text-align:left;">从右到左</td></tr><tr><td style="text-align:left;">乘除</td><td style="text-align:left;"><code> / %</code></td><td style="text-align:left;">从左到右</td></tr><tr><td style="text-align:left;">加减</td><td style="text-align:left;"><code>+ -</code></td><td style="text-align:left;">从左到右</td></tr><tr><td style="text-align:left;">移位</td><td style="text-align:left;"><code>&lt;&lt; &gt;&gt;</code></td><td style="text-align:left;">从左到右</td></tr><tr><td style="text-align:left;">关系</td><td style="text-align:left;"><code>&lt; &lt;= &gt; &gt;=</code></td><td style="text-align:left;">从左到右</td></tr><tr><td style="text-align:left;">相等</td><td style="text-align:left;"><code>== !=</code></td><td style="text-align:left;">从左到右</td></tr><tr><td style="text-align:left;">位与 AND</td><td style="text-align:left;">&amp;</td><td style="text-align:left;">从左到右</td></tr><tr><td style="text-align:left;">位异或 XOR</td><td style="text-align:left;">^</td><td style="text-align:left;">从左到右</td></tr><tr><td style="text-align:left;">位或 OR</td><td style="text-align:left;">I</td><td style="text-align:left;">从左到右</td></tr><tr><td style="text-align:left;">逻辑与 AND</td><td style="text-align:left;">&amp;&amp;</td><td style="text-align:left;">从左到右</td></tr><tr><td style="text-align:left;">逻辑或 OR</td><td style="text-align:left;">II</td><td style="text-align:left;">从左到右</td></tr><tr><td style="text-align:left;">条件</td><td style="text-align:left;"><code>?:</code></td><td style="text-align:left;">从右到左</td></tr><tr><td style="text-align:left;">赋值</td><td style="text-align:left;"><code>= += -= *= /= %=&gt;&gt;= &lt;&lt;= &amp;= ^=</code> I=</td><td style="text-align:left;">从右到左</td></tr><tr><td style="text-align:left;">逗号</td><td style="text-align:left;">,</td><td style="text-align:left;">从左到右</td></tr></tbody></table><p>示例：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>             int a = 20;</span></span>
<span class="line"><span>             int b = 10;</span></span>
<span class="line"><span>             int c = 15;</span></span>
<span class="line"><span>             int d = 5;</span></span>
<span class="line"><span>             int e;</span></span>
<span class="line"><span>             e = (a + b) * c / d;     // ( 30 * 15 ) / 5</span></span>
<span class="line"><span>             Console.WriteLine(&quot;(a + b) * c / d 的值是 {0}&quot;, e);</span></span>
<span class="line"><span>             e = ((a + b) * c) / d;   // (30 * 15 ) / 5</span></span>
<span class="line"><span>             Console.WriteLine(&quot;((a + b) * c) / d 的值是 {0}&quot;, e);</span></span>
<span class="line"><span>             e = (a + b) * (c / d);   // (30) * (15/5)</span></span>
<span class="line"><span>             Console.WriteLine(&quot;(a + b) * (c / d) 的值是 {0}&quot;, e);</span></span>
<span class="line"><span>             e = a + (b * c) / d;    //  20 + (150/5)</span></span>
<span class="line"><span>             Console.WriteLine(&quot;a + (b * c) / d 的值是 {0}&quot;, e);</span></span>
<span class="line"><span>             Console.ReadLine();</span></span></code></pre></div><h3 id="八、-预处理器指令" tabindex="-1">八、*预处理器指令 <a class="header-anchor" href="#八、-预处理器指令" aria-label="Permalink to &quot;八、*预处理器指令&quot;">​</a></h3><ul><li><code>#region/#endregion</code> 指令用于把一段代码标记为有给定名称的一个块</li><li><code>define/#undef</code> 结合 <code>#if/#elif/endif</code> 实现条件编译</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>#define debug</span></span>
<span class="line"><span>using System;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>namespace CSharp.Study.Test</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>    class Program</span></span>
<span class="line"><span>    {</span></span>
<span class="line"><span>        static void Main(string[] args)</span></span>
<span class="line"><span>        {</span></span>
<span class="line"><span>#if debug</span></span>
<span class="line"><span>            Console.WriteLine(&quot;debug&quot;);</span></span>
<span class="line"><span>#else</span></span>
<span class="line"><span>          Console.WriteLine(&quot;other&quot;);</span></span>
<span class="line"><span>#endif</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre></div><h2 id="c-分支语句" tabindex="-1">c#分支语句 <a class="header-anchor" href="#c-分支语句" aria-label="Permalink to &quot;c#分支语句&quot;">​</a></h2><p>分支结构要求程序员指定一个或多个要评估或测试的条件，以及条件为真时要执行的语句（必需的）和条件为假时要执行的语句（可选的）。下面是大多数编程语言中典型的分支结构的一般形式：</p><p>分支语句大致有<code>if</code> <code>else</code> <code>switch</code></p><p><strong>变量作用域</strong></p><p>变量作用域指：可以访问该变量的代码区域</p><p><strong>注意</strong>：</p><ul><li>只要类在某个作用域内，其字段(也称为成员变量)也在该作用域内</li><li>局部变量存在于表示声明该变量的块语句或方法结束的右花括号之前的作用域内</li><li>在 <code>for</code>、 <code>while</code> <code>if</code> <code>else</code> <code>switch</code> 或类似语句中声明的局部变量存在于该循环体内</li></ul><h3 id="一、if-else-语句-可以延续if-else-使用-else-if则须再加判断" tabindex="-1">一、if…else 语句（可以延续if else 使用 else if则须再加判断） <a class="header-anchor" href="#一、if-else-语句-可以延续if-else-使用-else-if则须再加判断" aria-label="Permalink to &quot;一、if…else 语句（可以延续if else 使用  else if则须再加判断）&quot;">​</a></h3><p>一个 <code>if</code> 语句 后可跟一个可选的 <code>else</code> 语句，<code>else</code> 语句在布尔表达式为假时执行。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>    if(boolean_expression)</span></span>
<span class="line"><span>    {</span></span>
<span class="line"><span>       /* 如果布尔表达式为真将执行的语句 */</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    else if((boolean_expression)</span></span>
<span class="line"><span>    {</span></span>
<span class="line"><span>       /* 如果布尔表达式为真将执行的语句 */</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    else{</span></span>
<span class="line"><span>      /* 如果布尔表达式为假将执行的语句 */</span></span>
<span class="line"><span>    }</span></span></code></pre></div><h3 id="二、switch-语句" tabindex="-1">二、switch 语句 <a class="header-anchor" href="#二、switch-语句" aria-label="Permalink to &quot;二、switch 语句&quot;">​</a></h3><p>一个 <code>switch</code> 语句允许测试一个变量等于多个值时的情况。每个值称为一个 <code>case</code>，且被测试的变量会对每个 <code>switch case</code> 进行检查。</p><blockquote><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>/* 局部变量定义 */</span></span>
<span class="line"><span>               char grade = &#39;B&#39;;</span></span>
<span class="line"><span>               switch (grade)</span></span>
<span class="line"><span>               {</span></span>
<span class="line"><span>                   case &#39;A&#39;:</span></span>
<span class="line"><span>                       Console.WriteLine(&quot;很棒！&quot;);</span></span>
<span class="line"><span>                       break;</span></span>
<span class="line"><span>                   case &#39;B&#39;:</span></span>
<span class="line"><span>                   case &#39;C&#39;:</span></span>
<span class="line"><span>                       Console.WriteLine(&quot;做得好&quot;);</span></span>
<span class="line"><span>                       break;</span></span>
<span class="line"><span>                   case &#39;D&#39;:</span></span>
<span class="line"><span>                       Console.WriteLine(&quot;您通过了&quot;);</span></span>
<span class="line"><span>                       break;</span></span>
<span class="line"><span>                   case &#39;F&#39;:</span></span>
<span class="line"><span>                       Console.WriteLine(&quot;最好再试一下&quot;);</span></span>
<span class="line"><span>                       break;</span></span>
<span class="line"><span>                   default:</span></span>
<span class="line"><span>                       Console.WriteLine(&quot;无效的成绩&quot;);</span></span>
<span class="line"><span>                       break;</span></span>
<span class="line"><span>               }</span></span>
<span class="line"><span>               Console.WriteLine(&quot;您的成绩是 {0}&quot;, grade);</span></span>
<span class="line"><span>               Console.ReadLine();</span></span></code></pre></div></blockquote><p><strong>switch 语句必须遵循下面的规则：</strong></p><ul><li><code>switch</code> 语句中的 <code>expression</code> 必须是一个整型或枚举类型，或者是一个 <code>class</code> 类型，其中 <code>class</code> 有一个单一的转换函数将其转换为整型或枚举类型。</li><li>在一个 <code>switch</code> 中可以有任意数量的 <code>case</code> 语句。每个 <code>case</code> 后跟一个要比较的值和一个冒号。</li><li><code>case</code> 的 <code>constant-expression</code> 必须与 <code>switch</code> 中的变量具有相同的数据类型，且必须是一个常量。</li><li>当被测试的变量等于 <code>case</code> 中的常量时，<code>case</code> 后跟的语句将被执行，直到遇到 <code>break</code> 语句为止。</li><li>当遇到 <code>break</code> 语句时，<code>switch</code> 终止，控制流将跳转到 <code>switch</code> 语句后的下一行。</li><li>不是每一个 <code>case</code> 都需要包含 <code>break</code>。如果 <code>case</code> 语句为空，则可以不包含 <code>break</code>，控制流将会 继续 后续的 <code>case</code>，直到遇到 <code>break</code> 为止。</li><li>C# 不允许从一个开关部分继续执行到下一个开关部分。如果 <code>case</code> 语句中有处理语句，则必须包含 <code>break</code> 或其他跳转语句。</li><li>一个 <code>switch</code> 语句可以有一个可选的 <code>default case</code>，出现在 <code>switch</code> 的结尾。<code>default case</code> 可用于在上面所有 <code>case</code> 都不为真时执行一个任务。<code>default case</code> 中的 <code>break</code> 语句不是必需的。</li><li>C# 不支持从一个 <code>case</code> 标签显式贯穿到另一个 <code>case</code> 标签。如果要使 C# 支持从一个 <code>case</code> 标签显式贯穿到另一个 <code>case</code> 标签，可以使用 <code>goto</code> 一个 <code>switch-case</code> 或 <code>goto default</code>。</li></ul><h3 id="三、-三目运算符" tabindex="-1">三、？：三目运算符 <a class="header-anchor" href="#三、-三目运算符" aria-label="Permalink to &quot;三、？：三目运算符&quot;">​</a></h3><p>我们已经在前面的章节中讲解了 条件运算符 <code>? :</code>，可以用来替代 <code>if…else</code> 语句。它的一般形式如下：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>    Exp1 ? Exp2 : Exp3;</span></span></code></pre></div><p>其中，<code>Exp1</code>、<code>Exp2</code> 和 <code>Exp3</code> 是表达式。请注意，冒号的使用和位置。</p><p><code>?</code> 表达式的值是由 <code>Exp1</code> 决定的。如果 <code>Exp1</code> 为真，则计算 <code>Exp2</code> 的值，结果即为整个 <code>?</code> 表达式的值。如果 <code>Exp1</code> 为假，则计算 <code>Exp3</code> 的值，结果即为整个 <code>?</code> 表达式的值。</p><h2 id="c-循环语句" tabindex="-1">c#循环语句 <a class="header-anchor" href="#c-循环语句" aria-label="Permalink to &quot;c#循环语句&quot;">​</a></h2><h3 id="一、while-循环" tabindex="-1">一、while 循环 <a class="header-anchor" href="#一、while-循环" aria-label="Permalink to &quot;一、while 循环&quot;">​</a></h3><p>只要给定的条件为真，C# 中的 <code>while</code> 循环语句会重复执行一个目标语句。</p><p>在这里，<code>Console.WriteLine(&quot;a 的值： {0}&quot;, a);</code> 可以是一个单独的语句，也可以是几个语句组成的代码块。<code>a &lt; 20</code> 可以是任意的表达式，当为任意非零值时都为真。当条件为真时执行循环。</p><p>当条件为假时，程序流将继续执行紧接着循环的下一条语句。</p><p>在这里，<code>while</code> 循环的关键点是循环可能一次都不会执行。当条件被测试且结果为假时，会跳过循环主体，直接执行紧接着 <code>while</code> 循环的下一条语句。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>/* 局部变量定义 */</span></span>
<span class="line"><span>                int a = 10;</span></span>
<span class="line"><span>                /* while 循环执行 */</span></span>
<span class="line"><span>                while (a &lt; 20)// 也就是说a=20或a&gt;20则不会执行循环</span></span>
<span class="line"><span>                {</span></span>
<span class="line"><span>                    Console.WriteLine(&quot;a 的值： {0}&quot;, a);</span></span>
<span class="line"><span>                    a++;</span></span>
<span class="line"><span>                }</span></span>
<span class="line"><span>                Console.ReadLine();</span></span>
<span class="line"><span>                因为是a++</span></span>
<span class="line"><span>                所以执行结果是</span></span>
<span class="line"><span>                10</span></span>
<span class="line"><span>                11</span></span>
<span class="line"><span>                12</span></span>
<span class="line"><span>                13</span></span>
<span class="line"><span>                14</span></span>
<span class="line"><span>                15</span></span>
<span class="line"><span>                16</span></span>
<span class="line"><span>                17</span></span>
<span class="line"><span>                18</span></span>
<span class="line"><span>                19</span></span></code></pre></div><h3 id="二、for-foreach-循环" tabindex="-1">二、for /foreach 循环 <a class="header-anchor" href="#二、for-foreach-循环" aria-label="Permalink to &quot;二、for /foreach 循环&quot;">​</a></h3><p><strong>下面是 for 循环的控制流：</strong></p><ul><li><code>int a = 10</code>会首先被执行，且只会执行一次。这一步允许您声明并初始化任何循环控制变量。您也可以不在这里写任何语句，只要有一个分号出现即可。</li><li>接下来，会判断 <code>a &lt; 20</code>。如果为真，则执行循环主体。如果为假，则不执行循环主体，且控制流会跳转到紧接着 for 循环的下一条语句。</li><li>在执行完 for 循环主体后，控制流会跳回上面的 <code>a = a + 1</code>语句。该语句允许您更新循环控制变量。该语句可以留空，只要在条件后有一个分号出现即可。</li><li>条件再次被判断。如果为真，则执行循环，这个过程会不断重复（循环主体，然后增加步值，再然后重新判断条件）。在条件变为假时，for 循环终止。</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span> /* for 循环执行 */</span></span>
<span class="line"><span>                for (int a = 10; a &lt; 20; a = a + 1)</span></span>
<span class="line"><span>                {</span></span>
<span class="line"><span>                    Console.WriteLine(&quot;a 的值： {0}&quot;, a);</span></span>
<span class="line"><span>                }</span></span>
<span class="line"><span>                Console.ReadLine();</span></span></code></pre></div><h4 id="foreach" tabindex="-1">foreach <a class="header-anchor" href="#foreach" aria-label="Permalink to &quot;foreach&quot;">​</a></h4><p>C# 也支持 <code>foreach</code> 循环，使用<code>foreach</code>可以迭代数组或者一个集合对象。</p><p><strong>以下实例有三个部分：</strong></p><ul><li>通过 <code>foreach</code> 循环输出整型数组中的元素。</li><li>通过 <code>for</code> 循环输出整型数组中的元素。</li><li><code>foreach</code> 循环设置数组元素的计算器。</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>int[] fibarray = new int[] { 0, 1, 1, 2, 3, 5, 8, 13 };</span></span>
<span class="line"><span>            foreach (int element in fibarray)</span></span>
<span class="line"><span>            {</span></span>
<span class="line"><span>                System.Console.WriteLine(element);</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span>            System.Console.WriteLine();</span></span>
<span class="line"><span>            // 类似 foreach 循环</span></span>
<span class="line"><span>            for (int i = 0; i &lt; fibarray.Length; i++)</span></span>
<span class="line"><span>            {</span></span>
<span class="line"><span>                System.Console.WriteLine(fibarray[i]);</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span>            System.Console.WriteLine();</span></span>
<span class="line"><span>            // 设置集合中元素的计算器</span></span>
<span class="line"><span>            int count = 0;</span></span>
<span class="line"><span>            foreach (int element in fibarray)</span></span>
<span class="line"><span>            {</span></span>
<span class="line"><span>                count += 1;</span></span>
<span class="line"><span>                System.Console.WriteLine(&quot;Element #{0}: {1}&quot;, count, element);</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span>            System.Console.WriteLine(&quot;Number of elements in the array: {0}&quot;, count);</span></span></code></pre></div><h3 id="三、do-while-循环" tabindex="-1">三、do…while 循环 <a class="header-anchor" href="#三、do-while-循环" aria-label="Permalink to &quot;三、do…while 循环&quot;">​</a></h3><p>不像 <code>for</code> 和 <code>while</code> 循环，它们是在循环头部测试循环条件。<code>do…while</code> 循环是在循环的尾部检查它的条件。</p><p><code>do…whil</code>e 循环与 <code>while</code> 循环类似，但是 <code>do…while</code> 循环会确保至少执行一次循环。</p><p>请注意，条件表达式出现在循环的尾部，所以循环中的 <code>Console.WriteLine(&quot;a 的值： {0}&quot;, a); a = a + 1;</code> 会在条件被测试之前至少执行一次。</p><p>如果条件为真，控制流会跳转回上面的 <code>do</code>，然后重新执行循环中的 <code>Console.WriteLine(&quot;a 的值： {0}&quot;, a); a = a + 1;</code>。这个过程会不断重复，直到给定条件变为假为止。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span> /* 局部变量定义 */</span></span>
<span class="line"><span>                int a = 10;</span></span>
<span class="line"><span>                /* do 循环执行 */</span></span>
<span class="line"><span>                do</span></span>
<span class="line"><span>                {</span></span>
<span class="line"><span>                   Console.WriteLine(&quot;a 的值： {0}&quot;, a);</span></span>
<span class="line"><span>                    a = a + 1;</span></span>
<span class="line"><span>                } while (a &lt; 20);// 条件</span></span>
<span class="line"><span>                Console.ReadLine();</span></span></code></pre></div><h3 id="四、循环控制语句" tabindex="-1">四、循环控制语句 <a class="header-anchor" href="#四、循环控制语句" aria-label="Permalink to &quot;四、循环控制语句&quot;">​</a></h3><p>循环控制语句更改执行的正常序列。当执行离开一个范围时，所有在该范围中创建的自动对象都会被销毁。</p><p>C# 提供了下列的控制语句：</p><ul><li><code>break</code>语句。终止 <code>loop</code> 或 <code>switch</code> 语句，程序流将继续执行紧接着 <code>loop</code> 或 <code>switch</code> 的下一条语句。</li><li><code>continue</code>语句。引起循环跳过主体的剩余部分，立即重新开始测试条件。</li></ul><h4 id="break语句" tabindex="-1">break语句 <a class="header-anchor" href="#break语句" aria-label="Permalink to &quot;break语句&quot;">​</a></h4><p><strong>C# 中 break 语句有以下两种用法：</strong></p><ul><li>当 <code>break</code> 语句出现在一个循环内时，循环会立即终止，且程序流将继续执行紧接着循环的下一条语句。</li><li>它可用于终止 <code>switch</code> 语句中的一个 <code>case</code>。</li></ul><p></p><p>如果您使用的是嵌套循环（即一个循环内嵌套另一个循环），break 语句会停止执行最内层的循环，然后开始执行该块之后的下一行代码。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>                /* 局部变量定义 */</span></span>
<span class="line"><span>                int a = 10;</span></span>
<span class="line"><span>                /* while 循环执行 */</span></span>
<span class="line"><span>                while (a &lt; 20)</span></span>
<span class="line"><span>                {</span></span>
<span class="line"><span>                    Console.WriteLine(&quot;a 的值： {0}&quot;, a);</span></span>
<span class="line"><span>                    a++;</span></span>
<span class="line"><span>                    if (a &gt; 15)</span></span>
<span class="line"><span>                    {</span></span>
<span class="line"><span>                        /* 使用 break 语句终止 loop */</span></span>
<span class="line"><span>                        break;</span></span>
<span class="line"><span>                    }</span></span>
<span class="line"><span>                }</span></span>
<span class="line"><span>                Console.ReadLine();</span></span></code></pre></div><h4 id="continue-语句" tabindex="-1">continue 语句 <a class="header-anchor" href="#continue-语句" aria-label="Permalink to &quot;continue 语句&quot;">​</a></h4><p>C# 中的 <code>continue</code> 语句有点像 <code>break</code> 语句。但它不是强迫终止，<code>continue</code> 会跳过当前循环中的代码，强迫开始下一次循环。对于 <code>for</code> 循环，<code>continue</code> 语句会导致执行条件测试和循环增量部分。对于 <code>while</code> 和 <code>do…while</code> 循环，<code>continue</code> 语句会导致程序控制回到条件测试上。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>/* 局部变量定义 */</span></span>
<span class="line"><span>                int a = 10;</span></span>
<span class="line"><span>                /* do 循环执行 */</span></span>
<span class="line"><span>                do</span></span>
<span class="line"><span>                {</span></span>
<span class="line"><span>                    if (a == 15)</span></span>
<span class="line"><span>                    {</span></span>
<span class="line"><span>                        /* 跳过迭代 */</span></span>
<span class="line"><span>                        a = a + 1;</span></span>
<span class="line"><span>                        continue;</span></span>
<span class="line"><span>                    }</span></span>
<span class="line"><span>                    Console.WriteLine(&quot;a 的值： {0}&quot;, a);</span></span>
<span class="line"><span>                    a++;</span></span>
<span class="line"><span>                } while (a &lt; 20);</span></span>
<span class="line"><span>                Console.ReadLine();</span></span></code></pre></div><h2 id="c-访问修饰符" tabindex="-1">c# *访问修饰符 <a class="header-anchor" href="#c-访问修饰符" aria-label="Permalink to &quot;c# *访问修饰符&quot;">​</a></h2><p>封装 被定义为&quot;把一个或多个项目封闭在一个物理的或者逻辑的包中&quot;。在面向对象程序设计方法论中，封装是为了防止对实现细节的访问。</p><p>抽象和封装是面向对象程序设计的相关特性。抽象允许相关信息可视化，封装则使开发者实现所需级别的抽象。</p><p>C# 封装根据具体的需要，设置使用者的访问权限，并通过 访问修饰符 来实现。</p><p>一个 访问修饰符 定义了一个类成员的范围和可见性。C# 支持的访问修饰符如下所示：</p><ul><li>Public：所有对象都可以访问；</li><li>Private：对象本身在对象内部可以访问；</li><li>Protected：只有该类对象及其子类对象可以访问</li><li>Internal：同一个程序集的对象可以访问；</li><li>Protected internal：该程序集内的派生类访问，是protected和internal的交集；</li></ul><h3 id="一、public-访问修饰符" tabindex="-1">一、Public 访问修饰符 <a class="header-anchor" href="#一、public-访问修饰符" aria-label="Permalink to &quot;一、Public 访问修饰符&quot;">​</a></h3><p><code>Public</code> 访问修饰符允许一个类将其成员变量和成员函数暴露给其他的函数和对象。任何公有成员可以被外部的类访问。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span> class Rectangle</span></span>
<span class="line"><span>        {</span></span>
<span class="line"><span>            //成员变量</span></span>
<span class="line"><span>            public double length;</span></span>
<span class="line"><span>            public double width;</span></span>
<span class="line"><span>            public double GetArea()</span></span>
<span class="line"><span>            {</span></span>
<span class="line"><span>                return length * width;</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span>            public void Display()</span></span>
<span class="line"><span>            {</span></span>
<span class="line"><span>                Console.WriteLine(&quot;长度： {0}&quot;, length);</span></span>
<span class="line"><span>                Console.WriteLine(&quot;宽度： {0}&quot;, width);</span></span>
<span class="line"><span>                Console.WriteLine(&quot;面积： {0}&quot;, GetArea());</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span>        }// Rectangle 结束</span></span>
<span class="line"><span>        class ExecuteRectangle</span></span>
<span class="line"><span>        {</span></span>
<span class="line"><span>            static void Main(string[] args)</span></span>
<span class="line"><span>            {</span></span>
<span class="line"><span>                Rectangle r = new Rectangle();</span></span>
<span class="line"><span>                r.length = 4.5;</span></span>
<span class="line"><span>            r.width = 3.5;</span></span>
<span class="line"><span>                r.Display();</span></span>
<span class="line"><span>                Console.ReadLine();</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span>        }</span></span></code></pre></div><p>在上面的实例中，成员变量 <code>length</code> 和 <code>width</code> 被声明为 <code>public</code>，所以它们可以被函数 <code>Main()</code> 使用 <code>Rectangle</code> 类的实例 <code>r</code> 访问。</p><p>成员函数 <code>Display()</code> 和 <code>GetArea()</code> 可以直接访问这些变量。</p><p>成员函数 <code>Display()</code> 也被声明为 <code>public</code>，所以它也能被 <code>Main()</code> 使用 <code>Rectangle</code> 类的实例 <code>r</code> 访问。</p><h3 id="二、private-访问修饰符" tabindex="-1">二、Private 访问修饰符 <a class="header-anchor" href="#二、private-访问修饰符" aria-label="Permalink to &quot;二、Private 访问修饰符&quot;">​</a></h3><p><code>Private</code> 访问修饰符允许一个类将其成员变量和成员函数对其他的函数和对象进行隐藏。只有同一个类中的函数可以访问它的私有成员。即使是类的实例也不能访问它的私有成员。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>  //成员变量</span></span>
<span class="line"><span>            private double length;</span></span>
<span class="line"><span>            private double width;</span></span>
<span class="line"><span>            public void Acceptdetails()</span></span>
<span class="line"><span>            {</span></span>
<span class="line"><span>                Console.WriteLine(&quot;请输入长度：&quot;);</span></span>
<span class="line"><span>                length = Convert.ToDouble(Console.ReadLine());</span></span>
<span class="line"><span>                Console.WriteLine(&quot;请输入宽度：&quot;);</span></span>
<span class="line"><span>                width = Convert.ToDouble(Console.ReadLine());</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span>            public double GetArea()</span></span>
<span class="line"><span>            {</span></span>
<span class="line"><span>                return length * width;</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span>            public void Display()</span></span>
<span class="line"><span>            {</span></span>
<span class="line"><span>                Console.WriteLine(&quot;长度： {0}&quot;, length);</span></span>
<span class="line"><span>                Console.WriteLine(&quot;宽度： {0}&quot;, width);</span></span>
<span class="line"><span>                Console.WriteLine(&quot;面积： {0}&quot;, GetArea());</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span>        }//end class Rectangle    </span></span>
<span class="line"><span>        class ExecuteRectangle</span></span>
<span class="line"><span>        {</span></span>
<span class="line"><span>            static void Main(string[] args)</span></span>
<span class="line"><span>            {</span></span>
<span class="line"><span>                Rectangle r = new Rectangle();</span></span>
<span class="line"><span>                r.Acceptdetails();</span></span>
<span class="line"><span>                r.Display();</span></span>
<span class="line"><span>                Console.ReadLine();</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span>        }</span></span></code></pre></div><p>在上面的实例中，成员变量 <code>length</code> 和 <code>width</code> 被声明为 <code>private</code>，所以它们不能被函数 <code>Main()</code> 访问。</p><p>成员函数 <code>AcceptDetails()</code> 和 <code>Display()</code> 可以访问这些变量。</p><p>由于成员函数 <code>AcceptDetails()</code> 和 <code>Display()</code> 被声明为 <code>public</code>，所以它们可以被 <code>Main()</code> 使用 <code>Rectangle</code> 类的实例 <code>r</code> 访问。</p><h3 id="三、protected-访问修饰符" tabindex="-1">三、Protected 访问修饰符 <a class="header-anchor" href="#三、protected-访问修饰符" aria-label="Permalink to &quot;三、Protected 访问修饰符&quot;">​</a></h3><p><code>Protected</code> 访问修饰符允许子类访问它的基类的成员变量和成员函数。这样有助于实现继承。我们将在继承的章节详细讨论这个。更详细地讨论这个。</p><h3 id="四、internal-访问修饰符" tabindex="-1">四、Internal 访问修饰符 <a class="header-anchor" href="#四、internal-访问修饰符" aria-label="Permalink to &quot;四、Internal 访问修饰符&quot;">​</a></h3><p><code>Internal</code> 访问说明符允许一个类将其成员变量和成员函数暴露给当前程序中的其他函数和对象。换句话说，带有 <code>internal</code> 访问修饰符的任何成员可以被定义在该成员所定义的应用程序内的任何类或方法访问。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span> class Rectangle</span></span>
<span class="line"><span>        {</span></span>
<span class="line"><span>            //成员变量</span></span>
<span class="line"><span>            internal double length;</span></span>
<span class="line"><span>            internal double width;</span></span>
<span class="line"><span>            double GetArea()</span></span>
<span class="line"><span>            {</span></span>
<span class="line"><span>                return length * width;</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span>           public void Display()</span></span>
<span class="line"><span>            {</span></span>
<span class="line"><span>                Console.WriteLine(&quot;长度： {0}&quot;, length);</span></span>
<span class="line"><span>                Console.WriteLine(&quot;宽度： {0}&quot;, width);</span></span>
<span class="line"><span>                Console.WriteLine(&quot;面积： {0}&quot;, GetArea());</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span>        }//end class Rectangle    </span></span>
<span class="line"><span>        class ExecuteRectangle</span></span>
<span class="line"><span>        {</span></span>
<span class="line"><span>            static void Main(string[] args)</span></span>
<span class="line"><span>            {</span></span>
<span class="line"><span>                Rectangle r = new Rectangle();</span></span>
<span class="line"><span>                r.length = 4.5;</span></span>
<span class="line"><span>                r.width = 3.5;</span></span>
<span class="line"><span>                r.Display();</span></span>
<span class="line"><span>                Console.ReadLine();</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span>        }</span></span></code></pre></div><p>在上面的实例中，请注意成员函数 <code>GetArea()</code> 声明的时候不带有任何访问修饰符。如果没有指定访问修饰符，则使用类成员的默认访问修饰符，即为 <code>private</code>。</p><h3 id="五、protected-internal-访问修饰符" tabindex="-1">五、Protected Internal 访问修饰符 <a class="header-anchor" href="#五、protected-internal-访问修饰符" aria-label="Permalink to &quot;五、Protected Internal 访问修饰符&quot;">​</a></h3><p><code>Protected Internal</code> 访问修饰符允许在本类,派生类或者包含该类的程序集中访问。这也被用于实现继承。</p><h2 id="c-方法" tabindex="-1">c#方法 <a class="header-anchor" href="#c-方法" aria-label="Permalink to &quot;c#方法&quot;">​</a></h2><p>当定义一个方法时，从根本上说是在声明它的结构的元素。在 C# 中，定义方法的语法如下：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>      &lt;Access Specifier&gt; &lt;Return Type&gt; &lt;Method Name&gt;(Parameter List)      {         Method Body      }</span></span></code></pre></div><p></p><p><strong>下面是方法的各个元素：</strong></p><ul><li>Access Specifier：访问修饰符，这个决定了变量或方法对于另一个类的可见性。</li><li>Return type：返回类型，一个方法可以返回一个值。返回类型是方法返回的值的数据类型。如果方法不返回任何值，则返回类型为 void。</li><li>Method name：方法名称，是一个唯一的标识符，且是大小写敏感的。它不能与类中声明的其他标识符相同。</li><li>Parameter list：参数列表，使用圆括号括起来，该参数是用来传递和接收方法的数据。参数列表是指方法的参数类型、顺序和数量。参数是可选的，也就是说，一个方法可能不包含参数。</li><li>Method body：方法主体，包含了完成任务所需的指令集。</li></ul><h4 id="一、创建方法" tabindex="-1">一、创建方法 <a class="header-anchor" href="#一、创建方法" aria-label="Permalink to &quot;一、创建方法&quot;">​</a></h4><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span> public int FindMax(int num1, int num2)</span></span>
<span class="line"><span>         {</span></span>
<span class="line"><span>            /* 局部变量声明 */</span></span>
<span class="line"><span>            int result;</span></span>
<span class="line"><span>            if (num1 &gt; num2)</span></span>
<span class="line"><span>               result = num1;</span></span>
<span class="line"><span>            else</span></span>
<span class="line"><span>               result = num2;</span></span>
<span class="line"><span>            return result;</span></span>
<span class="line"><span>         }</span></span></code></pre></div><h4 id="二、c-中调用方法" tabindex="-1">二、C# 中调用方法 <a class="header-anchor" href="#二、c-中调用方法" aria-label="Permalink to &quot;二、C# 中调用方法&quot;">​</a></h4><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span> public int FindMax(int num1, int num2)</span></span>
<span class="line"><span>            {</span></span>
<span class="line"><span>               /* 局部变量声明 */</span></span>
<span class="line"><span>               int result;</span></span>
<span class="line"><span>               if (num1 &gt; num2)</span></span>
<span class="line"><span>                  result = num1;</span></span>
<span class="line"><span>               else</span></span>
<span class="line"><span>                  result = num2;</span></span>
<span class="line"><span>               return result;</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span>            static void Main(string[] args)</span></span>
<span class="line"><span>            {</span></span>
<span class="line"><span>               /* 局部变量定义 */</span></span>
<span class="line"><span>               int a = 100;</span></span>
<span class="line"><span>               int b = 200;</span></span>
<span class="line"><span>               int ret;</span></span>
<span class="line"><span>               NumberManipulator n = new NumberManipulator();</span></span>
<span class="line"><span>               //调用 FindMax 方法</span></span>
<span class="line"><span>               ret = n.FindMax(a, b);</span></span>
<span class="line"><span>               Console.WriteLine(&quot;最大值是： {0}&quot;, ret );</span></span>
<span class="line"><span>               Console.ReadLine();</span></span>
<span class="line"><span>            }</span></span></code></pre></div><h3 id="三、递归方法调用" tabindex="-1">三、递归方法调用 <a class="header-anchor" href="#三、递归方法调用" aria-label="Permalink to &quot;三、递归方法调用&quot;">​</a></h3><p>一个方法可以自我调用。这就是所谓的 递归。下面的实例使用递归函数计算一个数的阶乘：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>      using System;</span></span>
<span class="line"><span>      namespace CalculatorApplication</span></span>
<span class="line"><span>      {</span></span>
<span class="line"><span>          class NumberManipulator</span></span>
<span class="line"><span>          {</span></span>
<span class="line"><span>              public int factorial(int num)</span></span>
<span class="line"><span>              {</span></span>
<span class="line"><span>                  /* 局部变量定义 */</span></span>
<span class="line"><span>                  int result;</span></span>
<span class="line"><span>                  if (num == 1)</span></span>
<span class="line"><span>                  {</span></span>
<span class="line"><span>                      return 1;</span></span>
<span class="line"><span>                  }</span></span>
<span class="line"><span>                  else</span></span>
<span class="line"><span>                  {</span></span>
<span class="line"><span>                      result = factorial(num - 1) * num;</span></span>
<span class="line"><span>                      return result;</span></span>
<span class="line"><span>                  }</span></span>
<span class="line"><span>              }</span></span>
<span class="line"><span>              static void Main(string[] args)</span></span>
<span class="line"><span>              {</span></span>
<span class="line"><span>                  NumberManipulator n = new NumberManipulator();</span></span>
<span class="line"><span>                  //调用 factorial 方法</span></span>
<span class="line"><span>                  Console.WriteLine(&quot;6 的阶乘是： {0}&quot;, n.factorial(6));</span></span>
<span class="line"><span>                  Console.WriteLine(&quot;7 的阶乘是： {0}&quot;, n.factorial(7));</span></span>
<span class="line"><span>                  Console.WriteLine(&quot;8 的阶乘是： {0}&quot;, n.factorial(8));</span></span>
<span class="line"><span>                  Console.ReadLine();</span></span>
<span class="line"><span>              }</span></span>
<span class="line"><span>          }</span></span>
<span class="line"><span>      }</span></span></code></pre></div><p>当上面的代码被编译和执行时，它会产生下列结果：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>    6 的阶乘是： 720    7 的阶乘是： 5040    8 的阶乘是： 40320</span></span></code></pre></div><p>计算过程：</p><blockquote><p>1 2 6 24 120 120 * 6 6 的阶乘是： 720 1 2 6 24 120 720 720 * 7 7 的阶乘是： 5040 1 2 6 24 120 720 5040 5040*8 8 的阶乘是： 40320</p></blockquote><h3 id="四、-参数传递" tabindex="-1">四、*参数传递 <a class="header-anchor" href="#四、-参数传递" aria-label="Permalink to &quot;四、*参数传递&quot;">​</a></h3><p>当调用带有参数的方法时，您需要向方法传递参数。在 C# 中，有三种向方法传递参数的方式：</p><table tabindex="0"><thead><tr><th style="text-align:left;">方式</th><th style="text-align:left;">描述</th></tr></thead><tbody><tr><td style="text-align:left;">值参数</td><td style="text-align:left;">这种方式复制参数的实际值给函数的形式参数，实参和形参使用的是两个不同内存中的值。在这种情况下，当形参的值发生改变时，<strong>不会影响实参的值</strong>，从而保证了实参数据的安全。</td></tr><tr><td style="text-align:left;">引用参数</td><td style="text-align:left;">这种方式复制参数的内存位置的引用给形式参数。这意味着，**当形参的值发生改变时，同时也改变实参的值。**ref 初始化必须有值</td></tr><tr><td style="text-align:left;">输出参数</td><td style="text-align:left;">这种方式可以返回多个值。out输出参数 不管是否传递这个参数都会从清0</td></tr></tbody></table><h4 id="按值传递参数" tabindex="-1">按值传递参数 <a class="header-anchor" href="#按值传递参数" aria-label="Permalink to &quot;按值传递参数&quot;">​</a></h4><p>这是参数传递的默认方式。在这种方式下，当调用一个方法时，会为每个值参数创建一个新的存储位置。实际参数的值会复制给形参，实参和形参使用的是两个不同内存中的值。所以，当形参的值发生改变时，不会影响实参的值，从而保证了实参数据的安全。下面的实例演示了这个概念：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>      using System;</span></span>
<span class="line"><span>      namespace CalculatorApplication</span></span>
<span class="line"><span>      {</span></span>
<span class="line"><span>         class NumberManipulator</span></span>
<span class="line"><span>         {</span></span>
<span class="line"><span>            public void swap(int x, int y)</span></span>
<span class="line"><span>            {</span></span>
<span class="line"><span>               int temp;</span></span>
<span class="line"><span>               temp = x; /* 保存 x 的值 */</span></span>
<span class="line"><span>               x = y;    /* 把 y 赋值给 x */</span></span>
<span class="line"><span>               y = temp; /* 把 temp 赋值给 y */</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span>            static void Main(string[] args)</span></span>
<span class="line"><span>            {</span></span>
<span class="line"><span>               NumberManipulator n = new NumberManipulator();</span></span>
<span class="line"><span>               /* 局部变量定义 */</span></span>
<span class="line"><span>               int a = 100;</span></span>
<span class="line"><span>               int b = 200;</span></span>
<span class="line"><span>               Console.WriteLine(&quot;在交换之前，a 的值： {0}&quot;, a);</span></span>
<span class="line"><span>               Console.WriteLine(&quot;在交换之前，b 的值： {0}&quot;, b);</span></span>
<span class="line"><span>               /* 调用函数来交换值 */</span></span>
<span class="line"><span>               n.swap(a, b);</span></span>
<span class="line"><span>               Console.WriteLine(&quot;在交换之后，a 的值： {0}&quot;, a);</span></span>
<span class="line"><span>               Console.WriteLine(&quot;在交换之后，b 的值： {0}&quot;, b);</span></span>
<span class="line"><span>               Console.ReadLine();</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span>         }</span></span>
<span class="line"><span>      }</span></span></code></pre></div><h4 id="按引用传递参数" tabindex="-1">按引用传递参数 <a class="header-anchor" href="#按引用传递参数" aria-label="Permalink to &quot;按引用传递参数&quot;">​</a></h4><p>引用参数是一个对变量的内存位置的引用。当按引用传递参数时，与值参数不同的是，它不会为这些参数创建一个新的存储位置。引用参数表示与提供给方法的实际参数具有相同的内存位置。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>      using System;</span></span>
<span class="line"><span>      namespace CalculatorApplication</span></span>
<span class="line"><span>      {</span></span>
<span class="line"><span>         class NumberManipulator</span></span>
<span class="line"><span>         {</span></span>
<span class="line"><span>            public void swap(ref int x, ref int y)</span></span>
<span class="line"><span>            {</span></span>
<span class="line"><span>               int temp;</span></span>
<span class="line"><span>               temp = x; /* 保存 x 的值 */</span></span>
<span class="line"><span>               x = y;    /* 把 y 赋值给 x */</span></span>
<span class="line"><span>               y = temp; /* 把 temp 赋值给 y */</span></span>
<span class="line"><span>             }</span></span>
<span class="line"><span>            static void Main(string[] args)</span></span>
<span class="line"><span>            {</span></span>
<span class="line"><span>               NumberManipulator n = new NumberManipulator();</span></span>
<span class="line"><span>               /* 局部变量定义 */</span></span>
<span class="line"><span>               int a = 100;</span></span>
<span class="line"><span>               int b = 200;</span></span>
<span class="line"><span>               Console.WriteLine(&quot;在交换之前，a 的值： {0}&quot;, a);</span></span>
<span class="line"><span>               Console.WriteLine(&quot;在交换之前，b 的值： {0}&quot;, b);</span></span>
<span class="line"><span>               /* 调用函数来交换值 */</span></span>
<span class="line"><span>               n.swap(ref a, ref b);</span></span>
<span class="line"><span>               Console.WriteLine(&quot;在交换之后，a 的值： {0}&quot;, a);</span></span>
<span class="line"><span>               Console.WriteLine(&quot;在交换之后，b 的值： {0}&quot;, b);</span></span>
<span class="line"><span>               Console.ReadLine();</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span>         }</span></span>
<span class="line"><span>      }</span></span></code></pre></div><h4 id="按输出传递参数" tabindex="-1">按输出传递参数 <a class="header-anchor" href="#按输出传递参数" aria-label="Permalink to &quot;按输出传递参数&quot;">​</a></h4><p><code>return</code> 语句可用于只从函数中返回一个值。但是，可以使用 <strong>输出参数</strong> 来从函数中返回两个值。输出参数会把方法输出的数据赋给自己，其他方面与引用参数相似。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>      using System;</span></span>
<span class="line"><span>      namespace CalculatorApplication</span></span>
<span class="line"><span>      {</span></span>
<span class="line"><span>         class NumberManipulator</span></span>
<span class="line"><span>         {</span></span>
<span class="line"><span>            public void getValue(out int x )</span></span>
<span class="line"><span>            {</span></span>
<span class="line"><span>               int temp = 5;</span></span>
<span class="line"><span>               x = temp;</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span>            static void Main(string[] args)</span></span>
<span class="line"><span>            {</span></span>
<span class="line"><span>               NumberManipulator n = new NumberManipulator();</span></span>
<span class="line"><span>               /* 局部变量定义 */</span></span>
<span class="line"><span>               int a = 100;</span></span>
<span class="line"><span>               Console.WriteLine(&quot;在方法调用之前，a 的值： {0}&quot;, a);</span></span>
<span class="line"><span>               /* 调用函数来获取值 */</span></span>
<span class="line"><span>               n.getValue(out a);</span></span>
<span class="line"><span>               Console.WriteLine(&quot;在方法调用之后，a 的值： {0}&quot;, a);</span></span>
<span class="line"><span>               Console.ReadLine();</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span>         }</span></span>
<span class="line"><span>      }</span></span></code></pre></div><p>提供给输出参数的变量不需要赋值。当需要从一个参数没有指定初始值的方法中返回值时，输出参数特别有用。请看下面的实例，来理解这一点：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>      using System;</span></span>
<span class="line"><span>      namespace CalculatorApplication</span></span>
<span class="line"><span>      {</span></span>
<span class="line"><span>         class NumberManipulator</span></span>
<span class="line"><span>         {</span></span>
<span class="line"><span>            public void getValues(out int x, out int y )</span></span>
<span class="line"><span>            {</span></span>
<span class="line"><span>                Console.WriteLine(&quot;请输入第一个值： &quot;);</span></span>
<span class="line"><span>                x = Convert.ToInt32(Console.ReadLine());</span></span>
<span class="line"><span>                Console.WriteLine(&quot;请输入第二个值： &quot;);</span></span>
<span class="line"><span>                y = Convert.ToInt32(Console.ReadLine());</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span>            static void Main(string[] args)</span></span>
<span class="line"><span>            {</span></span>
<span class="line"><span>               NumberManipulator n = new NumberManipulator();</span></span>
<span class="line"><span>               /* 局部变量定义 */</span></span>
<span class="line"><span>               int a , b;</span></span>
<span class="line"><span>               /* 调用函数来获取值 */</span></span>
<span class="line"><span>               n.getValues(out a, out b);</span></span>
<span class="line"><span>               Console.WriteLine(&quot;在方法调用之后，a 的值： {0}&quot;, a);</span></span>
<span class="line"><span>               Console.WriteLine(&quot;在方法调用之后，b 的值： {0}&quot;, b);</span></span>
<span class="line"><span>               Console.ReadLine();</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span>         }</span></span>
<span class="line"><span>      }</span></span></code></pre></div><h1 id="orm" tabindex="-1">ORM <a class="header-anchor" href="#orm" aria-label="Permalink to &quot;ORM&quot;">​</a></h1><p><strong>object Realation Maping</strong> 数据库关系映射工具</p><p>其实是为了关系性数据库和C# 语言的映射 让开发者用对象操作关系数据库</p><p>ORM 就是将C#代码 转换成sql语句来操作数据</p><p>EFCore 官方推荐 尽量屏蔽底层数据库差异（模型驱动）（约定大于配置）</p><p>Dapper 数据库驱动</p><p><strong>EFCore 与EF 差异</strong></p><blockquote><p>EF 有DBFirst、ModelFirst 、CodeFrist</p><p>EFCore 不支持模型优先 推荐使用代码优先</p><p>EF不会再有新的特性增加 未来.net 有ORM的更新都会添加到EFCore</p></blockquote><p>EFCore 是对于底层ADO.NETCore的封装，因此ADO.NETCore支持的数据库不一定被EFCore支持</p><p>概念：Migration 数据库迁移</p><blockquote><p>面向对象的ORM开发种，数据库不是程序员手动创建的而是由Migration 工具生成的。关系数据库只是盛放模型数据的一个媒介而已，理想状态下程序员不需要关心数据库的操作</p><p>根据对象的定义变化，自动更新数据库中的表以及表结构的操作叫做Migration （迁移）</p><p>迁移可以分为多步（项目进化），也可以回滚</p></blockquote><h2 id="efcore-基本使用" tabindex="-1">EFCore 基本使用 <a class="header-anchor" href="#efcore-基本使用" aria-label="Permalink to &quot;EFCore 基本使用&quot;">​</a></h2><ul><li><p><code>Microsoft.EntityFrameworkCore.SqlServer </code> 下载对应<code>nuget</code>包 （这个包安装不需要安装efcore的包单独装也可以）</p></li><li><p>建表中对应实体</p><div class="language-c# vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">c#</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">public</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> class</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> SysUser</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">     /// &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">summary</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">        /// 账号</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">        /// &lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">summary</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">        public</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> string</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> UserName</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">get</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">; </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">set</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">; }</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">        /// &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">summary</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">        /// 密码</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">        /// &lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">summary</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">        public</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> string</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> PassWord</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">get</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">; </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">set</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">; }</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">        /// &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">summary</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">        /// 头像</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">        /// &lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">summary</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">        public</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> string</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Avatar</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">get</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">; </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">set</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">; }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div></li><li><p>实体的配置类</p><div class="language-c# vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">c#</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> public</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> class</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> EntityConfiguration</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> : </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">IEntityTypeConfiguration</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">SysUser</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">        public</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> void</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Configure</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">EntityTypeBuilder</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">SysUser</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt; </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">builder</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            builder.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">ToTable</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;SysUser&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span></code></pre></div></li><li><p>DbContext配置</p><div class="language-c# vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">c#</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> public</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> class</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> MyDbContext</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> : </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">DbContext</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">        public</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> DbSet</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">SysUser</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt; </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Users</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">get</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">; </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">set</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">; }</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">        protected</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> override</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> void</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> OnConfiguring</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">DbContextOptionsBuilder</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> optionsBuilder</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">            base</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">OnConfiguring</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(optionsBuilder);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            optionsBuilder.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">UseSqlServer</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;Server=WIN-OBVK2686PPL;uid=sa;pwd=123456;Database=CoreSchool;MultipleActiveResultSets=true;pooling=true;min pool size=5;max pool size=32767;connect timeout=20;Encrypt=True;TrustServerCertificate=True;&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        }</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">        protected</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> override</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> void</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> OnModelCreating</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">ModelBuilder</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> modelBuilder</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">            base</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">OnModelCreating</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(modelBuilder);</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">            // 从当前程序集反射加载所有实现IEntityTypeConfiguration</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            modelBuilder.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">ApplyConfigurationsFromAssembly</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">this</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">GetType</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">().Assembly);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        }</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span></code></pre></div></li><li><p>使用<code>Migration</code> 工具生成表 可以每次都对每次的命令写上对应的别名</p><div class="language-c# vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">c#</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">安装对应 nuget 包 Microsoft.EntityFrameworkCore.Tools</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 初次加载（需要在DbContext所在的层使用）</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    Add</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">Migration Init</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  操作数据库</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    Update</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">Database</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    </span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    </span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> （增删改字段都是这个流程）</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">之后 不用再执行   Add</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">Migration Init   可以改为 Add</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">Migration 别名（操作列等方便记录）</span></span></code></pre></div></li></ul>`,216)])])}const u=a(p,[["render",l]]);export{g as __pageData,u as default};
