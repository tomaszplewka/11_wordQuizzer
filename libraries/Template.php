<?php 

namespace WordQuizzer;

class Template {

    protected $file;
    protected $vars = [];

    public function __construct($file)
    {
        $this->file = $file;
    }

    public function __set($key, $value)
    {
        $this->vars[$key] = $value;
    }

    public function __get($key)
    {
        $this->vars[$key];
    }

    public function output()
    {
        if (!file_exists($this->file)) {
            return "Error: $this->file template does not exist";
        }
        //Extracts vars to current view scope
        extract($this->vars);
        //Starts output buffering
        ob_start();
        //Includes contents
        include($this->file);
        $buffer = ob_get_contents();
        @ob_end_clean();
        // $output = file_get_contents($this->file);
        // foreach ($this->vars as $key => $value) {
        //     $toReplace = "[@$key]";
        //     $output = str_replace($toReplace, $value, $output);
        // }

        // return $output;
        return $buffer;
    }

}