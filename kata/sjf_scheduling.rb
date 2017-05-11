

def sjf(jobs, index)
  cc = 0
  job_val = jobs[index]

  sjf.each_with_index do |val, idx|
    if val < job_val || idx < index && num == job_val
      cc += num
    end
  end

    return cc += job_val
end

p sjf([3,10,20,1,2], 0)
