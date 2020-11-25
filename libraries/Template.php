<?php 

namespace WordQuizzer;

class Template {

    protected $file;
    protected $vars = [];

    public function __construct($file)
    {
        $this->file = $file;
    }

    public function set($key, $value)
    {
        $this->vars[$key] = $value;
    }

    public function output()
    {
        if (!file_exists($this->file)) {
            return "Error: $this->file template does not exist";
        }
        $output = file_get_contents($this->file);
        foreach ($this->vars as $key => $value) {
            $toReplace = "[@$key]";
            $output = str_replace($toReplace, $value, $output);
        }

        return $output;
    }

    static public function merge($templates, $separator = "n")
    {
        $output = '';

        foreach ($templates as $template) {
            $content = (get_class($template) !== "Template") ? "Error: incorect type (expected Template)" : $template->output();
            $content .= $content . $separator;
        }

        return $output;
    }

}