---
permalink: code-block-in-jekyll
layout: post
title:  "Code Block in Jekyll"
date:   2016-01-23 12:32:37 +0200
tags: jekyll
---

The other day I was looking for way to write a snippet within the post. I was looking all over the places on Google and came up with this simple solution.

Jekyll, by default, uses kramdown as the markdown parser. Fortunately kramdown is already smart enough to tell when there is a code block. All we have to do is to write the codes within the curly dashes, like the following :

~~~~
~~~
< codes to be placed here >
~~~
~~~~

If, for instance, we want to write codes in in a certain programming language, just add the program language name next to the curly dashes, like so :

~~~~
~~~css
< codes to be placed here >
~~~
~~~~

So far, the codes are still not highlighted because we have not told jekyll to. So let's go ahead and give styling to the code block. I have borrowed the style Aahan's [github style](https://github.com/aahan/pygments-github-style).

Notice that we do not have line numbers within the code block. If we want to have it, instead of putting the codes within curly dashes, this time we will put the codes within a liquid template tags

~~~~
{% raw %}{% highlight <language> linenos %}{% endraw %}
  < codes to be placed here >
{% raw %}{% endhighlight %}{% endraw %}
~~~~

And finally, the end result will look like the following :

{% highlight css linenos %}
.animate{
  animation: wait;
  animation-duration: 1000ms;
}
{% endhighlight %}

We actually do not need any external jekyll plugin to have highlighting of codes. We do not even have to specify any ``pygments`` dependency or anything. All that is needed is just ordinary css and liquid tags. This is because Jekyll already comes with ``rouge`` as default highlighter.
